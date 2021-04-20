import React from 'react';
import { Text , TouchableOpacity} from 'react-native';
import * as Linking from 'expo-linking';

export default Anchor = (props) => {
    return (
      <TouchableOpacity onPress={() => Linking.openURL(props.href)}>
        {props.children}
      </TouchableOpacity>
    );
  }