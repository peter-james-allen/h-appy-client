import React from 'react';
import { Text } from 'react-native';
import * as Linking from 'expo-linking';

const handlePress = (props) => {
  Linking.openURL(props.href);
  props.onPress && props.onPress();
};

export default function Anchor (props) {
    return (
      <Text {...props} onPress={handlePress(props)}>
        {props.children}
      </Text>
    );
  }
