import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>H-Appy</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
  },
});
