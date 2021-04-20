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
import MultiSelect from "react-native-multiple-select";
import Header from "../components/Header";
import { addToUserData } from "../src/UserData";
import { FetchCategories } from "../src/FetchActivities";
// import CategorySelect from "../components/CategorySelect";

export default function AddActivity() {
  const [ActivityType, setActivityType] = useState("default");
  const [ActivityName, setActivityName] = useState("");
  const [accessibility, setAccessibility] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState([]);

  const categories = FetchCategories();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.FormContainer}>
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
          ActivityType={ActivityType}
          ActivityName={ActivityName}
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
        onSlidingComplete={(value) => setPrice(Math.ceil(value))}
      />
    </View>
  );
}

function SubmitButton(props) {
  const {
    ActivityType,
    ActivityName,
    accessibility,
    price,
    categories,
  } = props;
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
          if (ActivityType !== "default" && ActivityName !== "") {
            addToUserData(ActivityType, {
              _id: ActivityName,
              name: ActivityName,
              accessibility: accessibility,
              cost: price,
              categories: categories,
              size: ActivityType,
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
    backgroundColor: "#696773",
    // alignContent: 'flex-start',
  },
  FormContainer: {
    flex: 0.8,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B1B6A6",
    borderRadius: 5,
  },
  FormItem: {
    flex: 0.2,
    borderRadius: 5,
    marginTop: "20%",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
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
  pickerContainer: {
    // flex: 0.3,
    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
  },
});
