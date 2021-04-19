/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Platform, SafeAreaView, ScrollView } from 'react-native';
import AppNavigator from './routes/AppNavigator';
import DrawerNavigator from './routes/DrawerNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.contentWrapper}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    backgroundColor: '#f8f9d4',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
