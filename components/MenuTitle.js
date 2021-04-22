import {
  View, Text, StyleSheet, Platform, Dimensions,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

export default function MenuTitle() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.menuTitle}>
        Feed your boredom...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.2,
    width: windowWidth * 0.93,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#363946',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginBottom: '5%',
    marginTop: '20%'
  },
  menuTitle: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkduster',
    color: '#fff',
    fontSize: 20,
  },
});

// flex: 0.1,
// marginTop: 45,
// marginBottom: 15,
// alignItems: 'center',
// justifyContent: 'center',
// backgroundColor: '#819595',
// width: '95%',
// padding: 25,
// borderRadius: 7,
