import React, { useEffect, useState }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, Alert, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/header';

export default function IndividualActivity() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <Text>this is where the full list of appetisers could go. a little mini menu. maybe also a blurb about what the appetiser category means in terms of activity size</Text>
      <Button
        title="Back to the Main Menu"
        onPress={() => navigation.navigate('MainMenu')}
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
    backgroundColor: '#f8f9d4'
  },
  menuCollapsible: {
    width: 250,
    fontSize: 50,
    borderRadius: 25,
    borderColor: '#240037'
  },
  menuSubText: {
    textAlign: 'center',
    fontSize: 20
  },
  menuSection: {
    fontSize: 30,
    fontFamily: 'Didot'
  },
  header: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#c7524a',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Didot'
  },
  homeImage: {
    position: "absolute",
    bottom: 30,
    width: 200,
    height: 200
  }
});
