import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function MenuTitle() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.menuTitle}>
        {/* Acitivity Menu */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#696773',
    width: '100%',
  },
  menuTitle: {
    fontFamily: 'DamascusBold',
    color: '#B1B6A6',
    fontSize: 18,
  },
});
