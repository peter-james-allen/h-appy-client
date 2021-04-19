import React, { Component, useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { FlatList } from 'react-native'

import MapView from 'react-native-maps';
import {
  Platform, StyleSheet, Text, View, Button, Dimensions, TextInput,
} from 'react-native';
import { abs } from 'react-native-reanimated';
import * as Location from 'expo-location';
import Header from '../components/Header';
import react from 'react';

const numColumns = 2;
const size = Dimensions.get('window').width / numColumns - 40;
const height = size / 1.3;

function Grid(props) {
  const { activity } = props;
  const categories = activity.categories.join('\n');
  const data = [
    { id: 'header0', value: 'Size' },
    { id: 'header1', value: 'Categories' },
    { id: 'size', value: activity.size },
    { id: 'categories', value: categories },
    { id: 'header2', value: 'Cost' },
    { id: 'header3', value: 'Acccessibility' },
    { id: 'cost', value: `${activity.cost}/10` },
    { id: 'accessibility', value: `${activity.accessibility}/10` },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={containerStyle(item)}>
          <Text style={[styles.item, itemStyle(item)]}>{item.value}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns} />
  );
}

function containerStyle(item) {
  const itemContainer = {
    width: size,
    height: height,
  }

  if (item.id.includes('header')) {
    return {
      width: size,
      height: size / 4,
    }
  }
  return itemContainer
}

function itemStyle(item) {
  const padding = {
    lineHeight: height
  }

  if (!item.id.includes('header')) {
    return padding
  }
}

export default function IndividualActivity({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.nameFlex}>
        <Text style={styles.name}>{route.params.item.name}</Text>
      </View>

      <View style={styles.descriptionContainer} >
        <Text style={styles.description} >
          Being with animals improves mood and takes away stress.
          Just half an hour with your furry friend per day can change your
          outlook and enable you to be more productive.
        </Text>
      </View>

      <View style={styles.grid} >
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
    shadowColor: "#000",
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
  itemContainer: {
    width: size,
    height: size,
  },
  item: {
    flex: 1,
    margin: 1,
    fontSize: 25,
    backgroundColor: '#cc3d3d',
    textAlign: 'center',
    color: '#fff',
  },
  grid: {
    position: 'absolute',
    bottom: 0,
    flex: 0.3,
  }
  // menuButton: {
  //   position: 'absolute',
  //   bottom: 0,
  //   flex: 0.1
  // },
});
