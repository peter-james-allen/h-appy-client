import React from 'react';
import {
  StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Platform,
} from 'react-native';
import Header from '../components/Header';
import CourseHeader from '../components/CourseHeader';
import FetchActivities from '../src/FetchActivities';
import IndividualActivityButton from '../components/IndividualActivityButton';
import MenuButton from '../components/MenuButton';

function buildItem(item) {
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

const windowWidth = Dimensions.get('window').width;

export default function IndividualCourse(props) {
  const { dataKey, header, description } = props;
  const apiData = FetchActivities();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.headerContainer}>
        <CourseHeader header={header} />
      </View>

      <View style={styles.activitiesContainer}>
        <View style={styles.courseDetailsContainer}>
          <Text style={styles.courseDetails}>
            {description}
          </Text>
        </View>
        <View style={styles.activityList}>
          <FlatList
            data={apiData[dataKey]}
            renderItem={buildItem}
            keyExtractor={(item) => item._id}
          />
        </View>
      </View>
      <MenuButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696773',
  },
  courseDetailsContainer: {
    flex: 0.4,
    alignContent: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  courseDetails: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier',
    textAlign: 'center',
    fontSize: 17,
    color: '#353746',
  },
  headerContainer: {
    flex: 0.08,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#819595',
    width: windowWidth * 0.93,
    padding: 20,
    top: '10%',
    borderRadius: 5,
  },
  activityList: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
    paddingBottom: 10,
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
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkduster',
    textAlign: 'center',
    fontSize: 17,
  },
  itemContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    padding: 3,
  },
  activitiesContainer: {
    flex: 0.95,
    marginTop: '23%',
    marginBottom: '12%',
    width: windowWidth * 0.93,
    backgroundColor: '#B1B6A6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
