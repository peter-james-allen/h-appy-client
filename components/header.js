import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>H-Appy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    backgroundColor: '#c7524a',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Didot',
  },
});
