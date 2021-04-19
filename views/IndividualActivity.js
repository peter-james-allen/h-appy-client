import React, { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import MapView from 'react-native-maps';
import {
  Platform, StyleSheet, Text, View, Button, Dimensions, TextInput,
} from 'react-native';
import { abs } from 'react-native-reanimated';
import * as Location from 'expo-location';
import Header from '../components/Header';
import GetLocation from '../src/GetLocation';

export default function IndividualActivity({ route }) {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.nameFlex}>
        <Text style={styles.name}>{route.params.item.name}</Text>
      </View>

      <View style={styles.detailsFlex}>
        <Text>{route.params.item.size}</Text>
        <Text>
          Accessibility:
          {route.params.item.accessibility}
          /10
        </Text>
        <Text>
          Cost:
          {route.params.item.cost}
          /10
        </Text>
        <Text>{route.params.item.categories}</Text>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.024,
            longitudeDelta: 0.789,
          }}
        />
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Where can I do this?"
            placeholderTextColor="#666"
          />
        </View>
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
  name: {
    fontSize: 25,
    textAlign: 'center',
    maxWidth: '90%',
    fontFamily: 'Chalkboard SE',
  },
  nameFlex: {
    flex: 0.2,
    top: 100,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsFlex: {
    flex: 0.2,
  },
  map: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  mapContainer: {
    width: '85%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  searchBar: {
    borderRadius: 10,
    margin: 10,
    color: '#000',
    borderColor: '#666',
    backgroundColor: '#FFF',
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 10,
    width: '100%',
  },
  // menuButton: {
  //   position: 'absolute',
  //   bottom: 0,
  //   flex: 0.1
  // },
});
