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
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    top: 0,
    backgroundColor: '#363946',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 60,
    height: 60,
    position: 'absolute',
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Courier-Bold',
    color: '#B1B6A6'
  },
});
