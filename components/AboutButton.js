import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function AboutButton() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={styles.aboutText}>
          About this App
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#819595',
    flex: 0.2,
    height: '8%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutText: {
    fontFamily: 'Courier',
    color: '#363946'
  },
})
