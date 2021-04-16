/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, Image, ActivityIndicator } from 'react-native';
import { DrawerNavigator } from "./routes/DrawerNavigator";

export default function App() {
  return (
    <DrawerNavigator />
  );
}
