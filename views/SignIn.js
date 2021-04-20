import React, { useState, useEffect } from 'react';
import {
  Text, View, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import SendAuthenticationData from '../src/AuthenticationData';
import { useNavigation } from '@react-navigation/native';

function SubmitButton(props) {
  const navigation = useNavigation();
  const {
    Email, Password,
  } = props;
  return (
    <View style={{ width: '80%' }}>
      <TouchableOpacity
        style={{
          marginLeft: 8, padding: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', borderRadius: 8,
        }}
        onPress={() => {
          SendAuthenticationData(Email, Password)
          navigation.navigate('Menu')
          }
        }

      >
        <Text style={{ color: '#fafafa' }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function SignIn() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Header />
        <View style={styles.FormItem}>
        <Text>Email</Text>
        <TextInput
          style={{ height: 10 }}
          onChangeText={(newEmail) => setEmail(newEmail)}
          defaultValue={Email}
        />
        </View>
        <View style={styles.FormItem}>
        <Text>Password</Text>
        <TextInput
          style={{ height: 10 }}
          onChangeText={(newPassword) => setPassword(newPassword)}
          defaultValue={Password}
        />
        </View>
        <SubmitButton Email={Email} Password={Password} />
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