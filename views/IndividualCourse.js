import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Header from '../components/Header';
import CourseHeader from '../components/CourseHeader';

function buildItem(item) {
  console.log(item);
  return (
    <View>
      <Text>{item.item.name}</Text>
    </View>
  );
}

export default function IndividualCourse(props) {
  const { dataKey, header } = props;

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
      <View style={styles.headerFlexbox}>
        <Header />
      </View>
      <View>
        <CourseHeader header={header} />
      </View>
      <View style={styles.courseDetails}>
        <Text>this is where the full list of appetisers could go. a little mini menu. maybe also a blurb about what the appetiser category means in terms of activity size</Text>
      </View>
      <View style={styles.activityList}>
        <FlatList
          data={apiData[dataKey]}
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9d4',
    alignContent: 'flex-start',
  },
  courseDetails: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 30,
  },
  headerFlexbox: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
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
    flex: 6,
  },
});
