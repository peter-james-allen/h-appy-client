/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { Text, View, StyleSheet, TouchableOpacity, Picker } from "react-native";
// import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { FetchCategories } from "../src/FetchActivities";

export default function Search() {
  const [category, setCategory] = useState("");
  const [accessibility, setAccessibility] = useState(0);
  const [price, setPrice] = useState(0);

  const categories = FetchCategories();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.formContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.Title}>Search all Activities</Text>
        </View>
        <View>
          <Text>Description of search paramters and accesibility score</Text>
        </View>

        <View style={styles.pickerContainer}></View>

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
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
      </View>
      <SubmitButton
        accessibility={accessibility}
        price={price}
        category={category}
      />
    </View>
  );
}

function AccessibilitySlider(props) {
  const { accessibility, setAccessibility } = props;
  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#696773"
        maximumTrackTintColor="#363946"
        onValueChange={(value) => setAccessibility(Math.ceil(value))}
      />
      <Text style={styles.sliderText}>
        Accessibility Score: {"\t"} {accessibility}
      </Text>
    </View>
  );
}

function PriceSlider(props) {
  const { price, setPrice } = props;
  return (
    <View style={styles.sliderContainer}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={4}
        minimumTrackTintColor="#696773"
        maximumTrackTintColor="#363946"
        onValueChange={(value) => setPrice(Math.ceil(value))}
      />
      <Text style={styles.sliderText}>
        Maximum Cost: {"\t"} {"£ ".repeat(price) || "Free :)"}
      </Text>
    </View>
  );
}

function SubmitButton(props) {
  const navigation = useNavigation();
  const searchParams = props;

  return (
    <View style={styles.submitButtonContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SearchResults", { searchParams });
        }}
      >
        <Text style={styles.submitButton}>Search</Text>
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
    // alignContent: 'flex-start',
  },
  formContainer: {
    flex: 0.82,
    width: "92%",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B1B6A6",
    borderRadius: 5,
  },
  nameContainer: {
    flex: 0.15,
    borderRadius: 5,
    marginTop: "5%",
    padding: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#363946",
  },
  nameField: {
    color: "#fff",
    fontFamily: "Chalkduster",
    fontSize: 18,
  },
  slider: {
    width: 280,
    opacity: 1,
    height: 50,
  },
  sliderContainer: {
    flex: 0.16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#819595",
    width: "90%",
    borderRadius: 5,
    marginBottom: 15,
  },
  sliderText: {
    color: "#23252E",
    fontFamily: "Courier",
    fontSize: 16,
  },
  pickerContainer: {
    marginTop: Platform.OS === "ios" ? -50 : 0,
    width: "80%",
    borderRadius: 10,
    flex: 0.3,
  },
  picker: {
    transform: Platform.OS === "ios" ? [{ scaleX: 0.8 }, { scaleY: 0.8 }] : [],
  },
  submitButtonContainer: {
    width: "92%",
    marginLeft: 8,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#363946",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "absolute",
    bottom: 15,
  },
  submitButton: {
    color: "#B1B6A6",
    fontFamily: "Courier",
    fontSize: 20,
  },
  Title: {
    fontSize: 25,
    fontFamily: "Chalkduster",
    textAlign: "center",
    color: "#FFF",
  },
});