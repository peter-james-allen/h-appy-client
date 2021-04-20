import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from '../views/MainMenu';
import About from '../views/About';
import IndividualCourse from '../views/IndividualCourse';
import AddActivity from '../views/AddActivity';
import {
  NIBBLES, APPETISERS, MAINS, DESSERTS,
} from '../src/CourseDescriptions';

const Drawer = createDrawerNavigator();

function Nibbles() {
  return (
    <IndividualCourse
      header="Nibbles"
      dataKey="nibbles"
      description={NIBBLES}
    />
  );
}

function Starters() {
  return (
    <IndividualCourse
      header="Starters"
      dataKey="appetisers"
      description={APPETISERS}
    />
  );
}

function Mains() {
  return (
    <IndividualCourse
      header="Mains"
      dataKey="mains"
      description={MAINS}
    />
  );
}

function Desserts() {
  return (
    <IndividualCourse
      header="Desserts"
      dataKey="desserts"
      description={DESSERTS}
    />
  );
}

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerStyle={styles.drawer}
    drawerContentOptions={drawerContentStyles}
  >
    <Drawer.Screen name="Menu" component={MainMenu} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Nibbles" component={Nibbles} />
    <Drawer.Screen name="Starters" component={Starters} />
    <Drawer.Screen name="Mains" component={Mains} />
    <Drawer.Screen name="Desserts" component={Desserts} />
    <Drawer.Screen name="Create a Recipe" component={AddActivity} />
  </Drawer.Navigator>
);

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#363946',
    width: 240,
  },
});

const drawerContentStyles = {
  activeTintColor: '#819595',
  itemStyle: {
    marginVertical: 5,
  },
  labelStyle: {
    fontFamily: 'Didot',
    fontSize: 20,
    paddingTop: 10,
    color: '#B1B6A6',
  },
};
