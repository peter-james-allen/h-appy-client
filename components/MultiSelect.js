import React, { useState } from "react";
import MultiSelect from "react-native-multiple-select";
import { View } from "react-native";

const items = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
];

export default function CategorySelect() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <View style={{ flex: 1 }}>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        selectText="Pick Items"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={(text) => console.log(text)}
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: "#CCC" }}
        submitButtonColor="#48d22b"
        submitButtonText="Submit"
      />
    </View>
  );
}

function onSelectedItemsChange(selectedItems) {
  setSelectedItems(selectedItems);
}
