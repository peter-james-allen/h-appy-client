/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Header from "../components/Header";
import { addToUserData } from "../src/UserData";
import MultiSelect from "react-native-multiple-select";
// import CategorySelect from "../components/CategorySelect";

export default function AddActivity() {
  const [ActivityType, setActivityType] = useState("default");
  const [ActivityName, setActivityName] = useState("");
  const [accessibility, setAccessibility] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const items = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
  ];

  function onSelectedItemsChange(selectedItems) {
    setSelectedItems(selectedItems);
    console.log(selectedItems);
  }


  return (
    <View style={styles.container}>
      <Header />
      <Text> This will be we can add activities as a user </Text>

      <View style={styles.FormItem}>
        <Text>Activity Type</Text>
        <Picker
          selectedValue={ActivityType}
          onValueChange={(itemValue, itemIndex) => setActivityType(itemValue)}
        >
          <Picker.Item
            label="Select a Menu Section..."
            value="default"
            enabled={false}
          />
          <Picker.Item label="Nibbles" value="nibbles" />
          <Picker.Item label="Appetisers" value="appetisers" />
          <Picker.Item label="Mains" value="mains" />
          <Picker.Item label="Desserts" value="desserts" />
        </Picker>
      </View>

      <View style={styles.FormItem}>
        <Text>Activity Name</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="enter the name of the activity here"
          onChangeText={(newActivityName) => setActivityName(newActivityName)}
          defaultValue={ActivityName}
        />
      </View>

      <View style={styles.selectContainer}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="name"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick categories"
          searchInputPlaceholderText="Search categories..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          // submitButtonColor="#48d22b"
          // submitButtonText="Submit"
        />
    </View>

      <AccessibilitySlider
        accessibility={accessibility}
        setAccessibility={setAccessibility}
      />
      <PriceSlider price={price} setPrice={setPrice} />

      <SubmitButton
        ActivityType={ActivityType}
        ActivityName={ActivityName}
        accessibility={accessibility}
        price={price}
        categories={selectedItems}
      />
    </View>
  );
}

function AccessibilitySlider(props) {
  const { accessibility, setAccessibility } = props;
  return (
    <View>
      <Text>
        Accessibility:
        {accessibility}
      </Text>
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
      <Text>
        Price:
        {price}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onSlidingComplete={(value) => (setPrice(Math.ceil(value)))}
      />
    </View>
  );
}

function SubmitButton(props) {
  const { ActivityType, ActivityName, accessibility, price, categories } = props;
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
          console.log(ActivityType);
          if (ActivityType !== "default" && ActivityName !== "") {
            addToUserData(ActivityType, {
              _id: ActivityName,
              name: ActivityName,
              accessibility,
              price,
              categories: categories
            });
          }
        }}
      >
        <Text style={{ color: "#fafafa" }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9d4",
    alignContent: "flex-start",
  },
  FormItem: {
    padding: 4,
    margin: 3,
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
  },
  slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginTop: 50,
  },
  selectContainer: {
    flex: 1,
    width: '80%',
    borderRadius: 10,
    // overflow: "hidden"
  },
});
