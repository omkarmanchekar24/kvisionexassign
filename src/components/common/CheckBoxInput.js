import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from 'react-native-check-box';

const CheckBoxInput = ({name}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <CheckBox
        isChecked={isSelected}
        onClick={() => {
          setSelection(!isSelected);
        }}
        style={styles.checkbox}
        checkedCheckBoxColor="blue"
        uncheckedCheckBoxColor="#F7F7F7"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {alignSelf: 'center'},
  name: {color: '#3F3F3F'},
});

export default CheckBoxInput;
