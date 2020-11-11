import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({buttonContainerStyle, buttonTextStyle, text, onPress}) => {
  return (
    <TouchableOpacity style={buttonContainerStyle} onPress={onPress}>
      <Text style={buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
