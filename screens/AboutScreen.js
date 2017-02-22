import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import pak from '@exponent/ex-navigation/package.json';

export default class AboutScreen extends React.PureComponent {

  static route = {
    navigationBar: {
      title: 'About',
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ExNavigation!!</Text>
        <Text style={styles.version}>{pak.version}</Text>

        <StatusBar barStyle="default" />
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    margin: 8,
  },
  version: {
    fontSize: 18,
  },
});
