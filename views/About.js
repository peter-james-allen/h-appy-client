import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View, Button, Alert, FlatList, ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';

export default function About() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <Text>This is the About page</Text>
      <Button
        title="Back to the Main Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9d4',
  },
});
