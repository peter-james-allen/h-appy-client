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

const windowWidth = Dimensions.get('window').width

export default function IndividualActivity({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />

      {/* <View style={styles.contentWrapper}> */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{route.params.item.name}</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Being with animals improves mood and takes away stress. Just half an
            hour with your furry friend per day can change your outlook and enable
            you to be more productive.
          </Text>

        <View style={styles.grid}>
          <Grid activity={route.params.item} />
        </View>
        </View>
      {/* </View> */}

      {/* <Button
        style={styles.menuButton}
        title="Back to the Main Menu"
        onPress={() => navigation.navigate('Menu')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // contentWrapper: {
  //   flex: 1,
  //   maxWidth: windowWidth * 0.95,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#B1B6A6',
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696773',
    height: Dimensions.get('window').height,
    width: windowWidth,
  },
  description: {
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    padding: 10,
    position: 'absolute',
    top: 5,
    color: '#23252E',
    fontFamily: 'Courier'
  },
  descriptionContainer: {
    flex: 0.95,
    marginTop: '70%',
    width: windowWidth * 0.9,
    backgroundColor: '#B1B6A6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
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
  nameContainer: {
    flex: 0.3,
    top: 80,
    width: windowWidth * 0.9,
    minHeight: 160,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363946',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  detailsContainer: {
    flex: 0.4,
    marginTop: 40,
    position: 'absolute',
    bottom: 70,
  },
  grid: {
    position: 'absolute',
    bottom: 0,
    flex: 0.3,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  // menuButton: {
  //   position: 'absolute',
  //   bottom: 0,
  //   flex: 0.1
  // },
});
