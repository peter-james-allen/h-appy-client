import React, { Component, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Anchor from '../components/Anchor';
import MenuButton from '../components/MenuButton';

const windowWidth = Dimensions.get('window').width;

export default function About() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.aboutFlex}>
        <Image style={styles.logo} source={require('../assets/logoH.png')} />
        <Text style={styles.about}>
          {'\n'}
          About H-Appy
        </Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={styles.blurb}>
          When you're bored, it can be difficult to choose an activity to relieve that boredom, in the same way that it can be difficult to make good food decisions when you're already hungry. Often, we end up doing things that just don't make us feel any better - like spending all day on social media, or eating unhealthy food.
          {'\n'}
          {'\n'}
          A dopamine menu is a list of activities grouped into different categories. It can help you decide what to do to alleviate your boredom in an appropriate way.

          Press the button below to learn more about the dopamine menu.
          {'\n'}
        </Text>
        <Anchor
          style={{ alignItems: 'center', margin: 20 }}
          href="https://www.youtube.com/watch?v=-6WCkTwW6xg"
        >
          <Ionicons style={{ alignContent: 'center', position: 'absolute' }} name="logo-youtube" size={30} color="#363946" />
        </Anchor>
        <Text>
          {'\n'}
        </Text>
      </View>
      <MenuButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696773',
    height: Dimensions.get('window').height,
    width: windowWidth,
  },
  aboutFlex: {
    margin: 20,
    padding: 20,
    width: '50%',
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363946',
    shadowColor: '#000',
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
    textAlign: 'center',
    maxWidth: '90%',
    fontFamily: 'Chalkduster',
    color: 'white',
  },
  aboutContainer: {
    width: windowWidth * 0.7,
    backgroundColor: '#B1B6A6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 20,
  },
  blurb: {
    fontSize: 14,
    lineHeight: 15,
    textAlign: 'center',
    padding: 10,
    top: 5,
    color: '#23252E',
    fontFamily: 'Courier',
  },
  logo: {
    width: 200,
    height: 100,
  },
});
