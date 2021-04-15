/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, Image, ActivityIndicator } from 'react-native';
import { AppNavigator } from "./routes/AppNavigator";


export default function App() {
  return (
    <AppNavigator />
  );
}
