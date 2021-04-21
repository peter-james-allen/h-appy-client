/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { Text, View, StyleSheet, TouchableOpacity, Picker } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { FetchCategories } from "../src/FetchActivities";
import { SearchActivities } from "../src/SearchActivities";
import { acc } from "react-native-reanimated";

export default function Search() {
  const [accessibility, setAccessibility] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState([]);
  const categories = FetchCategories();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.FormContainer}>
        <Text style={styles.header}>Search for an Activity</Text>
        <View style={styles.selectContainer}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          >
            <Picker.Item
              label="Select a Category..."
              value="default"
              enabled={false}
            />
            {categories.map((item, index) => {
              return <Picker.Item label={item} value={item} key={index} />;
            })}
          </Picker>
        </View>

        <AccessibilitySlider
          accessibility={accessibility}
          setAccessibility={setAccessibility}
        />
        <PriceSlider price={price} setPrice={setPrice} />

        <SubmitButton
          accessibility={accessibility}
          price={price}
          categories={[category]}
        />
      </View>
    </View>
  );
}

function AccessibilitySlider(props) {
  const { accessibility, setAccessibility } = props;
  return (
    <View>
      <Text>Accessibility: {accessibility}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onSlidingComplete={(value) => setAccessibility(Math.ceil(value))}
      />
    </View>
  );
}

function PriceSlider(props) {
  const { price, setPrice } = props;
  return (
    <View>
      <Text>Price: {"£ ".repeat(price)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={4}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onSlidingComplete={(value) => setPrice(Math.ceil(value))}
      />
    </View>
  );
}

function SubmitButton(props) {
  const navigation = useNavigation();
  const { accessibility, price, category } = props;
  return (
    <View style={{ width: "80%" }}>
      <TouchableOpacity
        style={{
          marginLeft: 8,
          padding: 8,
          backgroundColor: "#212121",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
        onPress={() => {
          SearchActivities({
            cost: price,
            accessibility: accessibility,
            categories: category,
          });
          navigation.navigate("Menu");
        }}
      >
        <Text style={{ color: "#fafafa" }}>Search</Text>
      </TouchableOpacity>
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
  FormContainer: {
    flex: 0.8,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B1B6A6",
    borderRadius: 5,
  },
  slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  selectContainer: {
    width: "80%",
    borderRadius: 10,
  },
});
