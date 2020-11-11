import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

function Input({placeholder, secureTextEntry, style}) {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {borderBottomWidth: 1, borderBottomColor: '#E8E8E8'},
  input: {},
});

Input.defaultProps = {
  secureTextEntry: false,
};

export default Input;
