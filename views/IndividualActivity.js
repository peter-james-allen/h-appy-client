import React, { useEffect, useState } from 'react';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View, Button, Alert, FlatList, ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';



export default function IndividualActivity({ route }) {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      <Header />
      <Text>all the stuff you wanna know about your activity goes here</Text>
      <Text>itemId: {route.params.itemID}</Text>
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
