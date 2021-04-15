import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState }  from 'react';
import CollapsibleView from '@eliav2/react-native-collapsible-view';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MainMenu() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chez H-Appy</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
      >
        <Text>About this App</Text>
      </TouchableOpacity>
      <Menu userData={userData} />
        <Image
        style={styles.homeImage}
        source={require('../forkknife.png')}
      />
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
  const { section } = props;
  const { subText } = props;
  let { apiData } = props;
  const { userData } = props;

  apiData = apiData || badNetworkApiData;
  console.log('apiData'); console.log(apiData);
  console.log('userData'); console.log(userData);
  return (

    <CollapsibleView title={<Text style={styles.menuSection}>{section}</Text>} style={styles.menuCollapsible} noArrow>
      <FlatList
        ListHeaderComponent={<Text style={styles.menuSubText}>{subText}</Text>}
        data={userData}
        renderItem={buildItem}
        keyExtractor={(item) => item.id}
        navigation={props.navigation}
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
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Didot'
  },
  homeImage: {
    bottom: 30,
    width: 200,
    height: 200
  },
  item: {
    margin: 3,
    padding: 6,
    fontSize: 15,
    backgroundColor: "#ffff99",
    borderRadius: 20,
  }
});

const userData = {
  nibbles: [
    {
      id: 'bd7dcbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Go to the Cinema',
      ingredients: [],
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Do a Puzzle',
      ingredients: ['a phone or computer or puzzle book'],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Take a long awaited break',
      ingredients: [],
    },
  ],
  appetisers: [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53dbb28ba',
      name: 'Do a codewars kata',
      ingredients: ['computer'],
    },
    {
      id: 'bd0acjea-c4b1-46c2-red5-3ad53abb28ba',
      name: 'Play a piece of music',
      ingredients: ['an instrument', 'somewhere private'],
    },
  ],
  mains: [
    {
      id: 'ai589cm1-oi5n-alf3-bd96-145571e29d72',
      name: 'Learn a new song on the guitar',
      ingredients: ['a guitar'],
    },
  ],
  desserts: [
    {
      id: '3ac68afc-dk30-3kf9-a4f8-fbd91aa9d07k',
      name: 'Browse Reddit for 3 hours',
      ingredients: ['a phone', 'Ennui'],
    },
  ]
}

const badNetworkApiData = [
  {
    id: 'bd7dcbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: "The chef isn't available for requests right now",
    ingredients: [],
  },
]
