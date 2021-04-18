import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text, TouchableOpacity, ActivityIndicator
} from 'react-native';

const IndividualActivityButton = ({id}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('IndividualActivity', {itemID: id})}>
        <Text>...</Text>
      </TouchableOpacity>
  )
}

export default IndividualActivityButton
