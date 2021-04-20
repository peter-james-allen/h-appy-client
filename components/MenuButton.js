import React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MenuButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.menuButtonContainer}>
      <TouchableOpacity>
        <Text
          style={styles.menuButton}
          onPress={() => navigation.navigate('Menu')}
        >
          Back to the Main Menu
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuButtonContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#819595',
    flex: 0.2,
    height: '4%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    fontFamily: 'Courier',
    color: '#363946',
  },
});
