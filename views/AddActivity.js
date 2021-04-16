import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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
});
