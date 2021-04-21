/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import {
  Text, View, TextInput, StyleSheet, TouchableOpacity, Picker, Platform,
} from 'react-native';
// import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import { editData } from '../src/UserData';
import { FetchCategories } from '../src/FetchActivities';

export default function EditActivity({ route }) {
  const oldItem = route.params.item;
  console.log(oldItem);
  const { menuSection } = route.params;
  const [ActivityType, setActivityType] = useState(menuSection);
  const [ActivityName, setActivityName] = useState(oldItem.name);
  const [ActivityDescription, setActivityDescription] = useState(oldItem.description);
  const [accessibility, setAccessibility] = useState(oldItem.accessibility);
  const [cost, setCost] = useState(oldItem.cost);
  const [category, setCategory] = useState(oldItem.categories[0] || []);

  const categories = FetchCategories();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.FormContainer}>

        <View style={styles.nameContainer}>
          <TextInput
            editable
            style={styles.nameField}
            placeholder="Activity name..."
            placeholderTextColor="#fff"
            onChangeText={(newActivityName) => setActivityName(newActivityName)}
            defaultValue={ActivityName}
          />
        </View>

        <View style={styles.nameContainer}>
          <TextInput
            editable
            style={styles.nameField}
            placeholder="Activity description..."
            placeholderTextColor="#fff"
            // eslint-disable-next-line max-len
            onChangeText={(newActivityDescription) => setActivityDescription(newActivityDescription)}
            defaultValue={ActivityDescription}
          />
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
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
            {categories.map((item, index) => <Picker.Item label={item} value={item} key={index} />)}
          </Picker>
        </View>

        <AccessibilitySlider
          accessibility={accessibility}
          setAccessibility={setAccessibility}
        />

        <PriceSlider price={cost} setPrice={setCost} />

      </View>
      <SubmitButton
        oldID={oldItem._id}
        ActivityType={ActivityType}
        ActivityName={ActivityName}
        ActivityDescription={ActivityDescription}
        accessibility={accessibility}
        price={cost}
        categories={[category]}
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
        Accessibility Score:
        {' '}
        {'\t'}
        {' '}
        {accessibility}
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
        Cost:
        {' '}
        {'\t'}
        {' '}
        {'£ '.repeat(price) || 'Free :)'}
      </Text>
    </View>
  );
}

function SubmitButton(props) {
  const navigation = useNavigation();
  const {
    oldID,
    ActivityDescription,
    ActivityType,
    ActivityName,
    accessibility,
    price,
    categories,
  } = props;
  return (
    <View style={styles.submitButtonContainer}>
      <TouchableOpacity
        onPress={() => {
          if (ActivityType === 'default') {
            alert('Please select an activity type');
          } else if (ActivityName === '') {
            alert('Please enter an activity name!');
          } else {
            editData(oldID, ActivityType, {
              _id: ActivityName,
              name: ActivityName,
              accessibility,
              cost: price,
              categories,
              size: ActivityType,
              description: ActivityDescription,
            });
            navigation.navigate('Menu');
          }
        }}
      >
        <Text style={styles.submitButton}>Edit </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696773',
    // alignContent: 'flex-start',
  },
  FormContainer: {
    flex: 0.82,
    width: '92%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B1B6A6',
    borderRadius: 5,
  },
  nameContainer: {
    flex: 0.15,
    borderRadius: 5,
    marginTop: '5%',
    padding: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363946',
  },
  nameField: {
    color: '#fff',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkduster',
    fontSize: 18,
  },
  slider: {
    width: 280,
    opacity: 1,
    height: 50,
  },
  sliderContainer: {
    flex: 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#819595',
    width: '90%',
    borderRadius: 5,
    marginBottom: 15,
  },
  sliderText: {
    color: '#23252E',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier',
    fontSize: 16,
  },
  pickerContainer: {
    marginTop: (Platform.OS === 'ios') ? -50 : 0,
    width: '80%',
    borderRadius: 10,
    flex: 0.3,
  },
  picker: {
    transform: (Platform.OS === 'ios') ? [{ scaleX: 0.80 }, { scaleY: 0.80 }] : [],
  },
  submitButtonContainer: {
    width: '92%',
    marginLeft: 8,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#363946',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: 15,
  },
  submitButton: {
    color: '#B1B6A6',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier',
    fontSize: 20,
  },
});
