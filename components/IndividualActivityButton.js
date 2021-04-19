import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text, TouchableOpacity, ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const IndividualActivityButton = ({id}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{paddingTop: 5}} onPress={() => navigation.navigate('IndividualActivity', {itemID: id})}>
        <Text><Ionicons name="ellipsis-horizontal" size={15} color="black" /></Text>
      </TouchableOpacity>
  )
}

export default IndividualActivityButton
