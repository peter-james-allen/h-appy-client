import React, { useState } from 'react';
import {
  Text, View, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import NewUserData from '../src/NewUserData';

function SubmitButton(props) {
  const {
    Name, Username, Email, Password,
  } = props;
  return (
    <View style={{ width: '80%' }}>
      <TouchableOpacity
        style={{
          marginLeft: 8, padding: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', borderRadius: 8,
        }}
        onPress={() => {
          NewUserData(Name, Username, Email, Password);
        }}
      >
        <Text style={{ color: '#fafafa' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function AddActivity() {
  const [Name, setName] = useState('');
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Header />
        <View style={styles.FormItem}>
        <Text>Name</Text>
        <TextInput
          style={{ height: 10 }}
          placeholder="Your name here"
          onChangeText={(newName) => setName(newName)}
          defaultValue={Name}
        />
        </View>
        <View style={styles.FormItem}>
        <Text>Username</Text>
        <TextInput
          style={{ height: 10 }}
          placeholder="Your username here"
          onChangeText={(newUsername) => setUsername(newUsername)}
          defaultValue={Username}
        />
        </View>
        <View style={styles.FormItem}>
        <Text>Email</Text>
        <TextInput
          style={{ height: 10 }}
          placeholder="joe.bloggs@example.com"
          onChangeText={(newEmail) => setEmail(newEmail)}
          defaultValue={Email}
        />
        </View>
        <View style={styles.FormItem}>
        <Text>Password</Text>
        <TextInput
          style={{ height: 10 }}
          placeholder="Minimum 8 characters"
          onChangeText={(newPassword) => setPassword(newPassword)}
          defaultValue={Password}
        />
        </View>
        <SubmitButton Name={Name} Username={Username} Email={Email} Password={Password} />
    </View>
    
  )};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f9d4',
      alignContent: 'flex-start',
    },
    FormItem: {
      padding: 4,
      margin: 3,
      borderWidth: 2,
      borderRadius: 5,
      width: '80%',
    },
  });