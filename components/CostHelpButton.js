import React from 'react';
import {
  Text, TouchableOpacity, ActivityIndicator, Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CostHelpButton = () => {
  return (
    <TouchableOpacity
      style={{ paddingTop: 5 }}
      onPress={() => Alert.alert(
        "Cost",
        "Cost description",
      )}
    >
      <Text>
        <Ionicons name="help-circle-outline" size={20} color="#B1B6A6" />
      </Text>
    </TouchableOpacity>
  );
};

export default CostHelpButton;