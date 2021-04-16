import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View, Button, Alert, FlatList, ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import CourseHeader from '../components/CourseHeader';


function buildItem(item) {
  console.log(item)
  return (
    <View >
      <Text>{item.item.name}</Text>
    </View>
  );
}

export default function IndividualCourse() {
  const navigation = useNavigation();
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
    <View style={styles.container}>
      <Header />
      <CourseHeader />
      <Text>this is where the full list of appetisers could go. a little mini menu. maybe also a blurb about what the appetiser category means in terms of activity size</Text>
      <View style={styles.activityList}>
        <FlatList 
          data={apiData.nibbles}
          renderItem={buildItem}
          keyExtractor={(item) => item._id}
        />
      </View>
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
  activityList: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
