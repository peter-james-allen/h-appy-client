import {
  Text, View, StyleSheet, FlatList, Dimensions,
} from 'react-native';
import React from 'react';

const numColumns = 2;
const size = Dimensions.get('window').width / numColumns - 40;
const height = size / 1.3;

export default function Grid(props) {
  const { activity } = props;
  const categories = activity.categories.join('\n');
  const data = [
    { id: 'header0', value: 'Size' },
    { id: 'header1', value: 'Categories' },
    { id: 'size', value: activity.size },
    { id: 'categories', value: categories },
    { id: 'header2', value: 'Cost' },
    { id: 'header3', value: 'Acccessibility' },
    { id: 'cost', value: `${activity.cost}/10` },
    { id: 'accessibility', value: `${activity.accessibility}/10` },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={containerStyle(item)}>
          <Text style={[styles.item, itemStyle(item)]}>{item.value}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />
  );
}

function containerStyle(item) {
  const itemContainer = {
    width: size,
    height,
  };

  if (item.id.includes('header')) {
    return {
      width: size,
      height: size / 4,
    };
  }
  return itemContainer;
}

function itemStyle(item) {
  const padding = {
    padding: '20%',
  };

  if (!item.id.includes('header')) {
    return padding;
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    margin: 1,
    fontSize: 25,
    backgroundColor: '#cc3d3d',
    textAlign: 'center',
    color: '#fff',
  },
});
