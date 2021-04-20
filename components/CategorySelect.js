import React, { useState } from "react";
import MultiSelect from "react-native-multiple-select";
import { View, StyleSheet } from "react-native";

const items = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
];

export default function CategorySelect() {

  function onSelectedItemsChange(selectedItems) {
    setSelectedItems(selectedItems);
    console.log(selectedItems);
  }

  return (
    <View style={styles.selectContainer}>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="name"
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Pick categories"
        searchInputPlaceholderText="Search categories..."
        onChangeInput={(text) => console.log(text)}
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: "#CCC" }}
        // submitButtonColor="#48d22b"
        // submitButtonText="Submit"
      />
    </View>
  );
}



const styles = StyleSheet.create({
  selectContainer: {
    flex: 1,
    width: '80%',
    borderRadius: 10,
    // overflow: "hidden"
  },
})
