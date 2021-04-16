import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CourseHeader() {
  return (
    <View styles={styles.courseHeaderContainer}>
      <Text style={styles.courseHeader}>Nibbles</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  courseHeader: {
    fontSize: 40,
    fontFamily: 'Didot',
  },
  courseHeaderContainer: {
    flex: 1,
    maxHeight: 50,
  },

});
