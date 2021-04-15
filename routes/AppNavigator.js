import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import MainMenu from "../views/MainMenu";
import About from '../views/About';
import Appetisers from '../views/Appetisers';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="float">
    {/* <Screen name="MainMenu" component={MainMenu} /> */}
    <Screen name="About" component={About} />
    <Screen name="Appetisers" component={Appetisers} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
