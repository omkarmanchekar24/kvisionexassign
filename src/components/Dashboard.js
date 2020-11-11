/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

//Components
import Box from './common/Box';

class Dashboard extends Component {
  render() {
    const menu = require('../assets/images/menu.jpg');
    const profile = require('../assets/images/profile.jpg');
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              console.log('pressed');
            }}>
            <Image source={menu} style={styles.icon} />
          </TouchableOpacity>
          <Image source={profile} style={styles.icon} />
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>Dashboard</Text>
          <View style={styles.row}>
            <Box
              style={styles.box1}
              onPress={() => Actions.products()}
              source={require('../assets/images/1.jpg')}
              text="Products"
            />
            <Box
              style={styles.box2}
              onPress={() => {}}
              source={require('../assets/images/2.jpg')}
              text="Types"
            />
          </View>
          <View style={styles.row}>
            <Box
              style={styles.box3}
              onPress={() => {}}
              source={require('../assets/images/3.jpg')}
              text="Bodies"
            />
            <Box
              style={styles.box4}
              onPress={() => {}}
              source={require('../assets/images/4.jpg')}
              text="Variations"
            />
          </View>
          <View style={styles.row}>
            <Box
              style={styles.box1}
              onPress={() => {}}
              source={require('../assets/images/5.jpg')}
              text="Parts"
            />
            <Box
              style={styles.box2}
              onPress={() => {}}
              source={require('../assets/images/6.jpg')}
              text="Departments"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  body: {
    flex: 8,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 25,
  },
  icon: {width: 40, height: 40},
  row: {flexDirection: 'row', height: 140, marginTop: 10},
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  box1: {flex: 1, marginRight: 5},
  box2: {flex: 1, marginLeft: 5},
  box3: {flex: 2, marginRight: 5},
  box4: {flex: 1, marginLeft: 5},
  text: {alignSelf: 'center'},
});

export default Dashboard;
