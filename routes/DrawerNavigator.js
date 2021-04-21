import React from 'react';
import {useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, Button } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MainMenu from '../views/MainMenu';
import About from '../views/About';
import IndividualCourse from '../views/IndividualCourse';
import AddActivity from '../views/AddActivity';
import {
  NIBBLES, APPETISERS, MAINS, DESSERTS,
} from '../src/CourseDescriptions';
import SignUp from '../views/SignUp';
import SignIn from '../views/SignIn';
import AuthContext from '../src/AuthContext';





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

function SignOutButton(props) {
  const { signOut } = React.useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem {...props}
        label="Sign Out"
        onPress={() => signOut()}
        style={styles.signout}
      />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = ({state}) => {
  if (state.userToken) {
    return (
      <Drawer.Navigator 
        drawerStyle={styles.drawer}
        drawerContent={(props) => <SignOutButton {...props} />}
        drawerContentOptions={drawerContentStyles}
        >
        <Drawer.Screen name="Menu" component={MainMenu} />
        <Drawer.Screen name="Nibbles" component={Nibbles} />
        <Drawer.Screen name="Starters" component={Starters} />
        <Drawer.Screen name="Mains" component={Mains} />
        <Drawer.Screen name="Desserts" component={Desserts} />
        <Drawer.Screen name="Add activity" component={AddActivity} />
        </Drawer.Navigator>
        )
      } else {
     return (
      <Drawer.Navigator 
        drawerStyle={styles.drawer}
        drawerContentOptions={drawerContentStyles}
        >
        <Drawer.Screen name="Menu" component={MainMenu} />
        <Drawer.Screen name="Nibbles" component={Nibbles} />
        <Drawer.Screen name="Starters" component={Starters} />
        <Drawer.Screen name="Mains" component={Mains} />
        <Drawer.Screen name="Desserts" component={Desserts} />
        <Drawer.Screen name="Sign up" component={SignUp} />
        <Drawer.Screen name="Sign in" component={SignIn} />
        </Drawer.Navigator>
        )
     }
    };

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#363946',
    width: 240,
  },
  signout: {
    fontFamily: 'Didot',
    fontSize: 20,
    paddingTop: 10,
    color: '#B1B6A6',
  }
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
