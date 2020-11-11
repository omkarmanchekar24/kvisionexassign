import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar, ScrollView} from 'react-native';

//Components
import SignIn from './src/components/SignIn';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignIn />
        <StatusBar barStyle="default" />
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
