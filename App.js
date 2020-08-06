import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';

import Navigator from './navigation/Navigator';
import React from 'react';

export default function App() {
  return (
    <Navigator />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
