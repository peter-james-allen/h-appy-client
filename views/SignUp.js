import React, { useState, useEffect } from 'react';
import {
  Text, View, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../src/AuthContext';

function SubmitButton(props) {
  const navigation = useNavigation();
  const { signUp } = React.useContext(AuthContext);
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
          signUp(Name, Username, Email, Password, navigation)
          }
        }

      >
        <Text style={{ color: '#fafafa' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function SignUp() {
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
          style={{ height: 20 }}
          placeholder="Your name here"
          onChangeText={(newName) => setName(newName)}
          defaultValue={Name}
          autoCompleteType="name"
        />
        </View>
        <View style={styles.FormItem}>
        <Text>Username</Text>
        <TextInput
          style={{ height: 20 }}
          placeholder="Your username here"
          onChangeText={(newUsername) => setUsername(newUsername)}
          defaultValue={Username}
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="username"
        />
        </View>
        <View style={styles.FormItem}>
        <Text>Email</Text>
        <TextInput
          style={{ height: 20 }}
          placeholder="joe.bloggs@example.com"
          onChangeText={(newEmail) => setEmail(newEmail)}
          defaultValue={Email}
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
        />
        </View>
        <View style={styles.FormItem}>
        <Text>Password</Text>
        <TextInput
          style={{ height: 20 }}
          placeholder="Minimum 8 characters"
          onChangeText={(newPassword) => setPassword(newPassword)}
          defaultValue={Password}
          secureTextEntry={true}
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