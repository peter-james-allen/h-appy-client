/* eslint-disable no-use-before-define */
import React from 'react';
import fetch from 'node-fetch';
import { useState, useEffect, useContext } from 'react';
import {
  StyleSheet, Platform, SafeAreaView, ScrollView, StatusBar,
} from 'react-native';
import FlashMessage, { showMessage, hideMessage } from 'react-native-flash-message';
import SecureStore from 'expo-secure-store';
import AppNavigator from './routes/AppNavigator';
import DrawerNavigator from './routes/DrawerNavigator';

import sendAuthenticationData from './src/AuthenticationData';
import AuthContext from './src/AuthContext';

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_USER':
          return {
            ...prevState,
            userToken: action.token,
            userName: action.name,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userName: action.name,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            userName: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      userName: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      let userName;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
        userName = await SecureStore.getItemAsync('userName');
      } catch (error) {

      }
      dispatch({ type: 'RESTORE_USER', token: userToken || null, name: userName || null });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (emailData, passwordData, navigation) => {
        fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailData,
          password: passwordData,
        })
      }).then((response) => {
        return response.json();
      }).then((json) => {
        if (json.user) {
          showMessage({
            message: 'Sign in successful',
            description: `Welcome back to H-Appy, ${json.user.name}!`,
            type: 'success',
          });

          dispatch({ type: 'SIGN_IN', token: JSON.stringify(json.token), name: JSON.stringify(json.user.name)})
          navigation.navigate('Menu')
        } else {
           showMessage({
             message: "Authentication failed",
             description: "Those details don't match our records",
             type: "error",
           });
      }}).catch((error) => {
        showMessage({
          message: "Oops",
          description: `Something went wrong. Please try again later.`,
          type: "error",
        });
      })
      },
      signOut: async (navigation, userToken) => {
        fetch('http://localhost:3000/user/profile/logout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + state.userToken
        },
      }).then(() => {
        dispatch({ type: 'SIGN_OUT'})
        navigation.navigate('Menu')
        showMessage({
          message: 'Sign out successful',
          description: 'Come back soon!',
          type: "success",
        })
      }).catch((error) => {
        showMessage({
          message: "Oops",
          description: `Something went wrong. Please try again later.`,
          type: "error",
        });
      })
    },
      signUp: async (nameData, usernameData, emailData, passwordData, navigation) => {
        fetch('http://localhost:3000/user', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: nameData,
            username: usernameData,
            email: emailData,
            password: passwordData,
          })
        }).then((response) => {
          console.log(response.json)
          return response.json();
        }).then((json) => {
        if (json.user) {
          showMessage({
            message: 'Signup successful',
            description: `Welcome to H-Appy, ${json.user.name}!`,
            type: 'success',
          });
          dispatch({ type: 'SIGN_IN', token: JSON.stringify(json.token), name: JSON.stringify(json.user.name) });
          navigation.navigate('Menu');s
        } else if (json.name && json.name === 'MongoError') {
          if ('email' in json.keyPattern) {
            showMessage({
              message: 'Email in use',
              description: 'That email has already been taken',
              type: 'error',
            });
          } else if ('username' in json.keyPattern) {
            showMessage({
              message: 'Username in use',
              description: 'That username has already been taken',
              type: 'error',
            });
          }
        } else if (json.errors) {
          if (json.errors.email && json.errors.email.name === 'ValidatorError') {
            showMessage({
              message: 'Email not valid',
              description: 'You must submit a valid email',
              type: 'error',
            });
          } else if (json.errors.password && json.errors.password.name === 'ValidatorError') {
            showMessage({
              message: 'Password too short',
              description: 'Your password must be at least 8 characters long',
              type: 'error',
            });
          }
        }
      }).catch((error) => {
        showMessage({
          message: "Oops",
          description: `Something went wrong. Please try again later.`,
          type: "error",
        });
      })
      },
    }),
    [],
  );

  return (
    <>
      <AuthContext.Provider value={authContext}>
        <SafeAreaView style={styles.safeAreaTop} />
        <SafeAreaView style={styles.safeAreaBottom}>
          <FlashMessage position="top" />
          <AppNavigator state={state} />
        </SafeAreaView>
        <StatusBar barStyle="light-content" />
      </AuthContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: '#363946',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: '#819595',
  },
});
