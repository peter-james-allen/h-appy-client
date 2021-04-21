import {
  View, Text, StyleSheet, Platform,
} from 'react-native';
import React from 'react';

export default function MenuTitle() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.menuTitle}>
        Feed your Boredom
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.1,
    marginTop: 45,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#819595',
    width: '95%',
    padding: 25,
    borderRadius: 7,
  },
  menuTitle: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Didot',
    color: '#363946',
    fontSize: 20,
  },
});
