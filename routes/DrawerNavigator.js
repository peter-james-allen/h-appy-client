import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from '../views/MainMenu';
import About from '../views/About';
import IndividualCourse from '../views/IndividualCourse';
import AddActivity from '../views/AddActivity';
import IndividualActivity from '../views/IndividualActivity';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Menu" component={MainMenu} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Nibbles" component={IndividualCourse} />
    <Drawer.Screen name="Starters" component={IndividualCourse} />
    <Drawer.Screen name="Mains" component={IndividualCourse} />
    <Drawer.Screen name="Desserts" component={IndividualCourse} />
    <Drawer.Screen name="Create a Recipe" component={AddActivity} />
  </Drawer.Navigator>
);

export const DrawerNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
