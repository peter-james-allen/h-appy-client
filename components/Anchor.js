import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

const handlePress = (props) => {
  Linking.openURL(props.href);
  props.onPress && props.onPress();
};

export default function Anchor(props) {
  return (
    <TouchableOpacity {...props} style={{ alignItems: 'center' }} onPress={() => handlePress(props)}>
      {props.children}
    </TouchableOpacity>
  );
}
