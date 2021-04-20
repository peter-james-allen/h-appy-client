/* eslint-disable no-use-before-define */
import React from 'react';
import {
  StyleSheet, Platform, SafeAreaView, ScrollView, StatusBar,
} from 'react-native';
import AppNavigator from './routes/AppNavigator';
import DrawerNavigator from './routes/DrawerNavigator';
import FlashMessage from 'react-native-flash-message';
import SecureStore from 'expo-secure-store';
import sendAuthenticationData from './src/AuthenticationData';

const AuthContext = React.createContext();

export default function App() {
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
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: sendAuthenticationData(emailData, passwordData, navigation);
      dispatch({ type: 'SIGN_IN', token: })
    })
  )
  
  
  
  
  
  
  return (
    <>
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <FlashMessage position="top" />
        <AppNavigator />
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
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
