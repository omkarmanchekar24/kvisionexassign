import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import CheckBoxInput from './common/CheckBoxInput';
import Rule from './common/Rule';
import Button from './common/Button';

const Filter = ({onRemovePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity onPress={() => onRemovePress()}>
          <Text style={styles.subTitle}>Remove Filters</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <CheckBoxInput name="Product Type" />
        <CheckBoxInput name="Product Type" />
        <Rule />
        <CheckBoxInput name="Body 1" />
        <CheckBoxInput name="Body 2" />
        <Rule />
        <CheckBoxInput name="Pidi 1" />
        <CheckBoxInput name="Pidi 2" />
        <Rule />

        <Button
          buttonContainerStyle={styles.button}
          buttonTextStyle={styles.buttonText}
          text="Apply Filters"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: 250, height: 400},
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#707070',
    marginRight: 10,
  },
  body: {marginTop: 20},
  button: {
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    height: 40,
    width: 130,
    backgroundColor: '#3E45A9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Filter;
