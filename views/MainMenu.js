/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import {
  StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert, FlatList, ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import getAllUserData, { emptyUserData, hasUserDataChanged } from '../src/UserData';
import { badNetworkApiData } from '../stockData';
import FetchActivities from '../src/FetchActivities';
import IndividualActivityButton from '../components/IndividualActivityButton';

export default function MainMenu() {
  const [userData, setUserData] = useState(emptyUserData);
  useEffect(() => {
    console.log('useEffect');
    const fetchStuff = async () => {
      const awaitedUserData = await getAllUserData();
      setUserData(awaitedUserData);
    };
    fetchStuff();
  }, [hasUserDataChanged()]);
  console.log('MainMenu');
  console.log(userData);

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

function Item(item) {
  if (item.item._id !== 'noConnection') {
    return (
      <View style={styles.item}>
        <Text>
          {item.item.name}
          {' '}
        </Text>
        <IndividualActivityButton style={styles.individualButton} id={item.item._id} />
      </View>
    );
  }
  return (
    <View style={styles.item}>
      <Text style={{ textAlign: 'center' }}>
        {item.item.name}
        .
      </Text>
      <TouchableOpacity
        style={{ paddingTop: 10 }}
        onPress={() => {
          Alert.alert('No Network connection', "We can't fetch suggestions. Please try again later.");
        }}
      >
        <Ionicons name="help" size={15} color="black" />
      </TouchableOpacity>
    </View>
  );
}

function MenuSection(props) {
  const { section, subText, userData } = props;
  let { apiData } = props;
  const navigation = useNavigation();
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
        renderItem={Item}
        keyExtractor={(item) => item._id}
      />
      <View style={styles.border} />
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>Chef's Specials</Text>}
        data={apiData}
        renderItem={Item}
        keyExtractor={(item) => item._id}
        navigation={props.navigation}
      />
    </CollapsibleView>
  );
}

function Menu(props) {
  const { userData } = props;
  const apiData = FetchActivities();

  return (
    <View>
      <MenuSection
        section="Nibbles"
        subText="Bitesized activities, for the short of time"
        apiData={apiData.nibbles}
        userData={userData.nibbles}
      />
      <MenuSection
        section="Appetisers"
        subText="very tasty small things"
        apiData={apiData.appetisers}
        userData={userData.appetisers}
      />
      <MenuSection
        section="Mains"
        subText="very tasty medium things"
        apiData={apiData.mains}
        userData={userData.mains}
      />
      <MenuSection
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
  item: {
    margin: 3,
    padding: 6,
    fontSize: 15,
    backgroundColor: '#ffff99',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },

  border: {
    height: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  individualButton: {
    alignSelf: 'flex-end',
  },
});
