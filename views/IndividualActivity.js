import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import Header from '../components/Header';
import { deleteDataByID } from '../src/UserData';

export default function IndividualActivity({ route }) {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>
      <Header />
      <Text>all the stuff you wanna know about your activity goes here</Text>
      <Text>
        itemId:
        {route.params.itemID}
      </Text>
      <Button
        title="Delete this activity"
        onPress={() => { deleteDataByID(route.params.itemID); navigation.navigate('Menu') } }
      // onPress = {deleteDate(key, item.id)}
      />
      <Button
        title="Back to the Main Menu"
        onPress={() => navigation.navigate('Menu')}
      />
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
});
