/* eslint-disable no-use-before-define */
import React from 'react';
import fetch from 'node-fetch';
import { useState, useEffect, useContext } from 'react';
import {
  StyleSheet, Platform, SafeAreaView, ScrollView, StatusBar,
} from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import AppNavigator from './routes/AppNavigator';
import DrawerNavigator from './routes/DrawerNavigator';
import FlashMessage from 'react-native-flash-message';
import SecureStore from 'expo-secure-store';
import sendAuthenticationData from './src/AuthenticationData';
import AuthContext from './src/AuthContext';

export default function App({navigation}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (error) {

      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken || null });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (emailData, passwordData, navigation) => {
        let response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailData,
          password: passwordData,
        })
      });
        let json = await response.json();
        if (json.user) {
          showMessage({
            message: "Sign in successful",
            description: `Welcome back to H-Appy, ${json.user.name}!`,
            type: "success",
          });
          dispatch({ type: 'SIGN_IN', token: JSON.stringify(json.token)})
          navigation.navigate('Menu')
        } else {
           showMessage({
             message: "Authentication failed",
             description: "Those details don't match our records",
             type: "error",
           });
         };
      },
      signOut: async (navigation, userToken) => {
        await fetch('http://localhost:3000/user/profile/logout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + state.userToken
        },
      });
        dispatch({ type: 'SIGN_OUT'})
        navigation.navigate('Menu')
        showMessage({
          message: "Sign out successful",
          description: 'Come back soon!',
          type: "success",
        })
    },
      signUp: async (nameData, usernameData, emailData, passwordData, navigation) => {
        let response = await fetch('http://localhost:3000/user', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: nameData,
            username: usernameData,
            email: emailData,
            password: passwordData,
          })
        });
        let json = await response.json();
        if (json.user) {
          showMessage({
            message: "Signup successful",
            description: `Welcome to H-Appy, ${json.user.name}!`,
            type: "success",
          });
          dispatch({ type: 'SIGN_IN', token: JSON.stringify(json.token)})
          navigation.navigate('Menu')
        } else if (json.name && json.name === "MongoError") {
          if ("email" in json.keyPattern) {
            showMessage({
              message: "Email in use",
              description: "That email has already been taken",
              type: "error",
            });
          }
          else if ("username" in json.keyPattern) {
            showMessage({
              message: "Username in use",
              description: "That username has already been taken",
              type: "error",
            });
          }
        }
        else if (json.errors) {
          if (json.errors.email && json.errors.email.name === "ValidatorError") {
            showMessage({
              message: "Email not valid",
              description: "You must submit a valid email",
              type: "error",
            });
          }
          else if (json.errors.password && json.errors.password.name === "ValidatorError") {
            showMessage({
              message: "Password too short",
              description: "Your password must be at least 8 characters long",
              type: "error",
            });
          }
        }
      },
    }),
    [],
  );

  console.log(state.userToken)

  return (
    <>
    <AuthContext.Provider value={authContext}>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <FlashMessage position="top" />
        <AppNavigator state = {state}/>
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

const validation = (response, navigation) => {
  if (response.user) {
    showMessage({
      message: "Signup successful",
      description: `Welcome to H-Appy, ${response.user.name}!`,
      type: "success",
    });
    dispatch({ type: 'SIGN_IN', token: JSON.stringify(response.token)})
    navigation.navigate('Menu')
  } else if (response.name && response.name === "MongoError") {
   if ("email" in response.keyPattern) {
     showMessage({
       message: "Email in use",
       description: "That email has already been taken",
       type: "error",
     });
   }
   else if ("username" in response.keyPattern) {
     showMessage({
       message: "Username in use",
       description: "That username has already been taken",
       type: "error",
     });
   }
 }
 else if (response.errors) {
   if (response.errors.email && response.errors.email.name === "ValidatorError") {
     showMessage({
       message: "Email not valid",
       description: "You must submit a valid email",
       type: "error",
     });
   }
   else if (response.errors.password && response.errors.password.name === "ValidatorError") {
     showMessage({
       message: "Password too short",
       description: "Your password must be at least 8 characters long",
       type: "error",
     });
   }
 }
}