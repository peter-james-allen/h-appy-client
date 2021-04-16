/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import DrawerNavigator from './routes/DrawerNavigator';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <SafeAreaView style={styles.contentWrapper}>
        <DrawerNavigator />
      </SafeAreaView>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    backgroundColor: '#f8f9d4',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
