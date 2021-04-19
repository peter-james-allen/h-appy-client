import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';

const IndividualActivityButton = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('IndividualActivity', { item })}>
      <Text>...</Text>
    </TouchableOpacity>
  );
};

export default IndividualActivityButton;
