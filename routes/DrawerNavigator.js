import React, { useState, useEffect } from 'react';

import { StyleSheet, Platform, Alert } from 'react-native';
import { NavigationContainer, Button, useNavigation } from '@react-navigation/native';
import {
  createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,
} from '@react-navigation/drawer';
import MainMenu from '../views/MainMenu';
import About from '../views/About';
import IndividualCourse from '../views/IndividualCourse';
import AddActivity from '../views/AddActivity';
import Search from '../views/Search';
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

const SignOutAlert = (navigation, signOut) => {
  Alert.alert(
    'Sign Out',
    'Are you sure you want to sign out?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Yes', onPress: () => signOut(navigation) },
    ],
  );
};

function SignOutButton(props) {
  const { signOut } = React.useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        label="Sign Out"
        onPress={() => SignOutAlert(navigation, signOut)}
        style={styles.signout}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = ({ state }) => {
  if (state.userToken) {
    return (
      <Drawer.Navigator
        drawerStyle={styles.drawer}
        drawerContent={(props) => <SignOutButton {...props} />}
        drawerContentOptions={drawerContentStyles}
      >
        <Drawer.Screen name="Menu" children={()=><MainMenu userName={state.userName}/>}/>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Nibbles" component={Nibbles} />
        <Drawer.Screen name="Starters" component={Starters} />
        <Drawer.Screen name="Mains" component={Mains} />
        <Drawer.Screen name="Desserts" component={Desserts} />
        <Drawer.Screen name="Create a Recipe" component={AddActivity} />
        <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
        )
      } else {
     return (
      <Drawer.Navigator
        drawerStyle={styles.drawer}
        drawerContentOptions={drawerContentStyles}
      >
        <Drawer.Screen name="Menu" children={()=><MainMenu userName={state.userName}/>}/>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Nibbles" component={Nibbles} />
        <Drawer.Screen name="Starters" component={Starters} />
        <Drawer.Screen name="Mains" component={Mains} />
        <Drawer.Screen name="Desserts" component={Desserts} />
        <Drawer.Screen name="Search" component={Search} />
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
  },
});

const drawerContentStyles = {
  activeTintColor: '#819595',
  itemStyle: {
    marginVertical: 5,
  },
  labelStyle: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Didot',
    fontSize: 20,
    paddingTop: 10,
    color: '#B1B6A6',
  },
};
