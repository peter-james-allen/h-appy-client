import React from 'react';
import {
  View, Text, StyleSheet, Platform,
} from 'react-native';

export default function CourseHeader(props) {
  const { header } = props;
  return (
    <View styles={styles.courseHeaderContainer}>
      <Text style={styles.courseHeader}>{header}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  courseHeader: {
    fontSize: 40,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Didot',
    textAlign: 'center',
    color: '#353746',
  },
  courseHeaderContainer: {
    flex: 1,
    maxHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
