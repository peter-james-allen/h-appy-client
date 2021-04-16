import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { Tooltip } from 'react-native-elements';
import {
  Text, View, TextInput, StyleSheet,
} from 'react-native';
import Header from '../components/Header';

export default function AddActivity() {
  const [text, setText] = useState('');
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
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>

      <AccessibilitySlider />
      <PriceSlider />

    </View>
  );
}

function AccessibilitySlider() {
  const [accessibility, setAccessibility] = useState(0);
  return (
    <View>
      <Tooltip popover={<Text>
        accessibility is an indication of how easy it is to set out to do this activity, with 0 being easy to 10 being hard.
        </Text>} width={150} height={150} backgroundColor={'#c1c4c8'}>
        <Text>Accessibility: {accessibility}</Text>
      </Tooltip>
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
      <Tooltip popover={<Text>
        Price is an indication of how expensive this activity can be with 0 being free to 10 being very expensive.
        </Text>} width={150} height={150} backgroundColor={'#c1c4c8'}>
        <Text>Price: {price}</Text>
      </Tooltip>
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
