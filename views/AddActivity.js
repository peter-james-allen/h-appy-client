import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import {
  Text, View, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import { getUserData, addToUserData } from '../components/UserData';

export default function AddActivity() {
  const [ActivityName, setActivityName] = useState('');
  const [newActivity, setNewActivity] = useState({ _id: '', name: '' });

  return (
    <View style={styles.container}>
      <Header />
      <Text> This will be we can add activities as a user </Text>

      <View style={styles.FormItem}>
        <Text>Activity Type</Text>
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

      <AccessibilitySlider />
      <PriceSlider />

      <View style={styles.FormItem}>
        <TouchableOpacity
          style={{ marginLeft: 8, padding: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}
          onPress={() => {
            addToUserData('nibbles', { _id: 'boo', name: ActivityName });
          }}
        >
          <Text style={{color: '#fafafa' }}>Add</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

function AccessibilitySlider() {
  const [accessibility, setAccessibility] = useState(0);
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

function PriceSlider() {
  const [price, setPrice] = useState(0);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9d4',
    alignContent: 'flex-start',
  },
  FormItem: {
    margin: 3,
    borderWidth: 2,
    width: '80%',
  },
  slider: {
    width: 300,
    opacity: 1,
    height: 50,
    marginTop: 50,
  },
});
