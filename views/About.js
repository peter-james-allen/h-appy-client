import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View, TouchableOpacity, Image
} from 'react-native';
import Header from '../components/Header';
import Anchor from '../components/Anchor';
import { Ionicons } from '@expo/vector-icons';


export default function About() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
    <Image
    style={styles.logo}
    source={require('../assets/logomaybe.jpg')}/>
    <View style={styles.aboutFlex}>
      <Text style={styles.about}>About H-Appy</Text>
    </View>
    <Text style={styles.blurb}>
    When you're bored, it can be difficult to choose an activity to relieve that boredom, in the same way that it can be difficult to make good food decisions when you're already hungry. Often, we end up doing things that just don't make us feel any better - like spending all day on social media, or eating unhealthy food.
    {"\n"}{"\n"}
A dopamine menu is a list of activities grouped into different categories. It can help you decide what to do to alleviate your boredom in an appropriate way.

Learn more about the dopamine menu with the video below.{"\n"}{"\n"}
        

<Anchor
      href ='https://www.youtube.com/watch?v=-6WCkTwW6xg'
    >
      <Ionicons name="logo-youtube" size={30} color="#000000" />
    </Anchor>
    </Text>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9d4',
  },
  boutFlex: {
    margin: 20,
    width: "50%",
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  about: {
    fontSize: 18,
    textAlign: "center",
    maxWidth: "90%",
    fontFamily: "Chalkduster",
    color: "white",
  },
  blurb: {
    fontFamily: "Didot",
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    width: "70%",
    margin: 20,
    fontSize: 16,
    textAlign: 'center'
  },
  logo: {
    width: 200,
    height: 100,  
  },
});

