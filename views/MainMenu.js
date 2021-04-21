/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import {
  StyleSheet, Text, View, TouchableOpacity, Alert, FlatList, Dimensions, LogBox, Platform,
} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import getAllUserData, { emptyUserData } from '../src/UserData';
import { badNetworkApiData } from '../stockData';
import FetchActivities from '../src/FetchActivities';
import IndividualActivityButton from '../components/IndividualActivityButton';
import AboutButton from '../components/AboutButton';
import MenuTitle from '../components/MenuTitle';

const windowWidth = Dimensions.get('window').width;

function pressHandler() {
  Alert.alert('No Network connection', "We can't fetch suggestions. Please try again later.");
}

export default function MainMenu() {
  const [userData, setUserData] = useState(emptyUserData);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchStuff = async () => {
      const awaitedUserData = await getAllUserData();
      setUserData(awaitedUserData);
    };
    fetchStuff();
  }, [isFocused]);

  const navigation = useNavigation();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <MenuTitle />

      <View style={styles.menuContainer}>
        <ScrollView>
          <Menu userData={userData} style={styles.menu} />
        </ScrollView>
      </View>

      <AboutButton />
      <StatusBar />
    </View>
  );
}

function Item(item) {
  if (item.item._id !== 'noConnection') {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Text style={styles.itemText}>
            {item.item.name}
          </Text>
          <IndividualActivityButton style={styles.individualButton} item={item.item} />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        {item.item.name}
      </Text>
      <TouchableOpacity
        style={{ paddingTop: 10 }}
        onPress={pressHandler}
      >
        <Ionicons name="help" size={15} color="fff" />
      </TouchableOpacity>
    </View>
  );
}

function MenuSection(props) {
  const {
    section, subText, userData,
  } = props;
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
        ListHeaderComponent={<Text style={styles.menuSubText}>Favourites</Text>}
        data={userData}
        renderItem={Item}
        keyExtractor={(item) => item._id}
      />
      <View style={styles.border} />
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>Specials</Text>}
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
  const apiData = FetchActivities(3);

  return (
    <View>
      <MenuSection
        section="Nibbles"
        apiData={apiData.nibbles}
        userData={userData.nibbles}
      />
      <MenuSection
        section="Appetisers"
        apiData={apiData.appetisers}
        userData={userData.appetisers}
      />
      <MenuSection
        section="Mains"
        apiData={apiData.mains}
        userData={userData.mains}
      />
      <MenuSection
        section="Desserts"
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
    backgroundColor: '#696773',
    width: windowWidth,
  },
  scroll: {
  },
  menuContainer: {
    overflow: 'scroll',
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },
  menuCollapsible: {
    fontSize: 50,
    borderRadius: 10,
    backgroundColor: '#B1B6A6',
    width: windowWidth * 0.94,
  },
  menuSubText: {
    textAlign: 'center',
    fontFamily: 'Courier',
    fontSize: 20,
    color: '#363946',
  },
  menuSection: {
    fontSize: 30,
    fontFamily: 'Didot',
    fontWeight: 'bold',
    color: '#363946',
    padding: 25,
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
    padding: 10,
    fontSize: 15,
    backgroundColor: '#363946',
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.32,
    elevation: 4,
  },
  itemText: {
    color: '#fff',
    fontFamily: 'Chalkduster',
    textAlign: 'center',
    fontSize: 17,
  },
  itemContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    padding: 3,
  },
  border: {
    paddingTop: 30,
  },
  individualButton: {
    alignSelf: 'flex-end',
  },
});
