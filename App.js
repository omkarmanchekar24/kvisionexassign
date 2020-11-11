/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, LogBox} from 'react-native';
import Router from './src/Router';

LogBox.ignoreAllLogs();
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
