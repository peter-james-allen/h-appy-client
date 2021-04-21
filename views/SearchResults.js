import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import CourseHeader from "../components/CourseHeader";
import FetchActivities from "../src/FetchActivities";
import IndividualActivityButton from "../components/IndividualActivityButton.js";
import MenuButton from "../components/MenuButton";

// export default function SearchResults() {
//   return(
//     <View>
//       <Text>Hi</Text>
//     </View>
//   )
// }

function buildItem(item) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.item.name}</Text>
        <IndividualActivityButton
          style={styles.individualButton}
          item={item.item}
        />
      </View>
    </View>
  );
}

function SearchActivities(query) {
  // const { category, cost, accessibility } = query;
  const [apiData, setApiData] = useState([]);
  // console.log(query.accessibility);
  useEffect(() => {
    fetch(
      `https://happy-haddocks.herokuapp.com/search?cost=${query.cost}&accessibility=${query.accessibility}&categories=${query.category}`
    )
      .then((response) => response.json())
      .then((json) => setApiData(json))
      .catch((error) => console.error(error));
  }, []);
  return apiData;
}

const windowWidth = Dimensions.get("window").width;

export default function SeachResults({ route }) {
  const apiData = SearchActivities({
    cost: route.params.searchParams.price,
    accessibility: route.params.searchParams.accessibility,
    category: route.params.searchParams.category,
  });

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.headerContainer}>
        <Text>Search Results</Text>
      </View>

      <View style={styles.activitiesContainer}>
        <View>
          <Text>Filter Props</Text>
        </View>

        <View style={styles.courseDetailsContainer}></View>
        <View style={styles.activityList}>
          <FlatList
            data={apiData}
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#696773",
  },
  courseDetailsContainer: {
    flex: 0.4,
    alignContent: "center",
    justifyContent: "center",
    width: "90%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  courseDetails: {
    fontFamily: "Courier",
    textAlign: "center",
    fontSize: 17,
    color: "#353746",
  },
  headerContainer: {
    flex: 0.08,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#819595",
    width: windowWidth * 0.9,
    padding: 15,
    top: "10%",
    borderRadius: 5,
  },
  activityList: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.8,
    paddingBottom: 10,
  },
  item: {
    margin: 3,
    padding: 10,
    fontSize: 15,
    backgroundColor: "#363946",
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.34,
    shadowRadius: 5.32,
    elevation: 4,
  },
  itemText: {
    color: "#fff",
    fontFamily: "Chalkduster",
    textAlign: "center",
    fontSize: 17,
  },
  itemContainer: {
    borderRadius: 5,
    overflow: "hidden",
    padding: 3,
  },
  activitiesContainer: {
    flex: 0.95,
    marginTop: "25%",
    marginBottom: "12%",
    width: windowWidth * 0.9,
    backgroundColor: "#B1B6A6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
