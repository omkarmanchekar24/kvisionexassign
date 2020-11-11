import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const Box = ({style, onPress, source, text}) => {
  return (
    <TouchableOpacity style={[styles.box, style]} onPress={onPress}>
      <Image style={styles.icon} source={source} />
      <Text style={styles.text}>Manage</Text>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  icon: {width: 40, height: 40},
  text: {alignSelf: 'center'},
});

export default Box;
