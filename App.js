import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/Navigation/Navigation';
export default function App(props) {
  return (
    <Navigation />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});