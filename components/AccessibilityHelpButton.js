import React from 'react';
import {
  Text, TouchableOpacity, ActivityIndicator, Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccessibilityHelpButton = () => {
  return (
    <TouchableOpacity
      style={{ paddingTop: 5 }}
      onPress={() => Alert.alert(
        "Accesibility",
        "Accessibility description",
      )}
    >
        <Ionicons name="help-circle-outline" size={20} color="#B1B6A6" style={{ height: 20, width: 20, textAlign: 'center' }} />
    </TouchableOpacity>
  );
};

export default AccessibilityHelpButton;