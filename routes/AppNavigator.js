import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from '../views/MainMenu';
import About from '../views/About';
import IndividualCourse from '../views/IndividualCourse';
import AddActivity from '../views/AddActivity';
import IndividualActivity from '../views/IndividualActivity';
import DrawerNavigator from './DrawerNavigator';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = ({state}) => {
    return (
  <Navigator headerMode="none">
    <Screen name="Drawer" children={()=><DrawerNavigator state={state}/>}/>
    <Screen name="IndividualActivity" component={IndividualActivity} />
  </Navigator>
)};

const AppNavigator = ({state}) => {
  return (
  <NavigationContainer>
    <HomeNavigator state={state}/>
  </NavigationContainer>
)};

export default AppNavigator;
