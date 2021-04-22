import React, { useState, useEffect } from 'react';
import {
  Text, View, TextInput, StyleSheet, TouchableOpacity, Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import AuthContext from '../src/AuthContext';

const windowWidth = Dimensions.get('window').width;

function SubmitButton(props) {
  const navigation = useNavigation();
  const { signUp } = React.useContext(AuthContext);
  const {
    Name, Username, Email, Password,
  } = props;
  return (
    <View style={[styles.buttonContainer, styles.shadow]}>
      <TouchableOpacity
        onPress={() => {
          signUp(Name, Username, Email, Password, navigation);
        }}

      >
        <Text style={styles.button}>Sign Up</Text>
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

      <View style={[styles.titleContainer, styles.shadow]}>
          <Text style={styles.formTitle}>
            Sign Up
          </Text>
      </View>

      <View style={[styles.FormItem, styles.shadow, { marginTop: 120 }]}>
        <TextInput
          style={styles.textInput}
          placeholder="Your name here"
          onChangeText={(newName) => setName(newName)}
          defaultValue={Name}
          autoCompleteType="name"
        />
      </View>
      <View style={[styles.FormItem, styles.shadow] }>
        <TextInput
          style={styles.textInput}
          placeholder="Your username here"
          onChangeText={(newUsername) => setUsername(newUsername)}
          defaultValue={Username}
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="username"
        />
      </View>
      <View style={[styles.FormItem, styles.shadow]}>
        <TextInput
          style={styles.textInput}
          placeholder="joe.bloggs@example.com"
          onChangeText={(newEmail) => setEmail(newEmail)}
          defaultValue={Email}
          spellCheck={false}
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
        />
      </View>
      <View style={[styles.FormItem, styles.shadow]}>
        <TextInput
          style={styles.textInput}
          placeholder="Password (Minimum 8 characters)"
          onChangeText={(newPassword) => setPassword(newPassword)}
          defaultValue={Password}
          secureTextEntry
        />
      </View>
      <SubmitButton Name={Name} Username={Username} Email={Email} Password={Password} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696773',
  },
  FormItem: {
    padding: 15,
    margin: 3,
    borderRadius: 5,
    width: windowWidth * 0.93,
    backgroundColor: '#B1B6A6',
    marginTop: 10,

  },
  textInput: {
    fontFamily: 'Courier',
    height: 30,
    textAlign: 'center',
    color: '#363946',
    fontSize: 16
  },
  titleContainer: {
    width: windowWidth * 0.93,
    top: 80,
    padding: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363946',
    borderRadius: 5,
    shadowColor: '#000',
  },
  formTitle: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkduster',
    color: '#fff',
    fontSize: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonContainer: {
    width: windowWidth * 0.93,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363946',
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
  },
  button: {
    color: '#B1B6A6',
    fontFamily: 'Courier',
    fontSize: 16,
  }
});
