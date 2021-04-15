/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, Button, Alert, FlatList, Image, ActivityIndicator, SafeAreaView,
} from 'react-native';
import { DrawerNavigator } from './routes/DrawerNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.contentWrapper}>
      <DrawerNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    backgroundColor: '#f8f9d4'
  }
})
