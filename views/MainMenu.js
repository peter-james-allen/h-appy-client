/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import {
  StyleSheet, Text, View, TouchableOpacity, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fetch from 'node-fetch';
import Header from '../components/Header';
import getUserData from '../src/UserData';

export default function MainMenu() {
  const [userData] = useState(getUserData());
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text>About this App</Text>
      </TouchableOpacity>
      <Menu userData={userData} />
      <StatusBar />
    </View>
  );
}

function buildItem(item) {
  return (
    <View style={styles.item}>
      <Text>{item.item.name}</Text>
    </View>
  );
}

function BuildMenuSection(props) {
  const { section, subText, userData } = props;
  let { apiData } = props;

  apiData = apiData || badNetworkApiData;
  return (

    <CollapsibleView
      title={<Text style={styles.menuSection}>{section}</Text>}
      style={styles.menuCollapsible}
      noArrow
    >
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>{subText}</Text>}
        data={userData}
        renderItem={buildItem}
        keyExtractor={(item) => item._id}
      />
      <View
        style={{
          height: 5,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>Chefs Specials</Text>}
        data={apiData}
        renderItem={buildItem}
        keyExtractor={(item) => item._id}
        navigation={props.navigation}
      />
    </CollapsibleView>
  );
}

function Menu(props) {
  const { userData } = props;
  const [isLoading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/activities')
      .then((response) => response.json())
      .then((json) => setApiData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View>
      <BuildMenuSection
        section="Nibbles"
        subText="Bitesized activities, for the short of time"
        apiData={apiData.nibbles}
        userData={userData.nibbles}
      />

      <BuildMenuSection
        section="Appetisers"
        subText="very tasty small things"
        apiData={apiData.appetisers}
        userData={userData.appetisers}
      />

      <BuildMenuSection
        section="Mains"
        subText="very tasty medium things"
        apiData={apiData.mains}
        userData={userData.mains}
      />

      <BuildMenuSection
        section="Desserts"
        subText="pudding"
        apiData={apiData.desserts}
        userData={userData.desserts}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9d4',
  },
  menuCollapsible: {
    width: 250,
    fontSize: 50,
    borderRadius: 25,
    borderColor: '#240037',
  },
  menuSubText: {
    textAlign: 'center',
    fontSize: 20,
  },
  menuSection: {
    fontSize: 30,
    fontFamily: 'Didot',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Didot',
  },
  homeImage: {
    bottom: 30,
    width: 200,
    height: 200,
  },
  item: {
    margin: 3,
    padding: 6,
    fontSize: 15,
    backgroundColor: '#ffff99',
    borderRadius: 20,
  },
});

const badNetworkApiData = [
  {
    _id: 'bd7dcbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: "The chef isn't available for requests right now",
    ingredients: [],
  },
];
