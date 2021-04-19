import React, { Component, useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TextInput,
} from 'react-native';
import react from 'react';
import Header from '../components/Header';
import Grid from '../components/Grid';

export default function IndividualActivity({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.nameFlex}>
        <Text style={styles.name}>{route.params.item.name}</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Being with animals improves mood and takes away stress. Just half an
          hour with your furry friend per day can change your outlook and enable
          you to be more productive.
        </Text>
      </View>

      <View style={styles.grid}>
        <Grid activity={route.params.item} />
      </View>

      {/* <Button
        style={styles.menuButton}
        title="Back to the Main Menu"
        onPress={() => navigation.navigate('Menu')}
      /> */}
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
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  description: {
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
  },
  descriptionContainer: {
    width: '80%',
    flex: 0.1,
    marginTop: 100,
    position: 'absolute',
    paddingBottom: 50,
  },
  individualDetail: {
    fontSize: 25,
    padding: 10,
  },
  name: {
    fontSize: 25,
    textAlign: 'center',
    maxWidth: '90%',
    fontFamily: 'Chalkduster',
    color: 'white',
  },
  nameFlex: {
    flex: 0.3,
    top: 100,
    width: '80%',
    minHeight: 160,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  detailsFlex: {
    flex: 0.4,
    marginTop: 40,
    position: 'absolute',
    bottom: 70,
  },
  grid: {
    position: 'absolute',
    bottom: 0,
    flex: 0.3,
  },
  // menuButton: {
  //   position: 'absolute',
  //   bottom: 0,
  //   flex: 0.1
  // },
});
