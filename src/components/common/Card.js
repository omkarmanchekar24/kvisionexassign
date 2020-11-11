/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = ({product, description}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/leaf.jpg')}
        style={styles.image}
        imageStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View style={styles.header}>
          <Text style={styles.imageText}>Product Type</Text>
          <Text style={styles.imageText}>Pidi</Text>
        </View>
        <Text style={styles.imageText}>Body Name</Text>
      </ImageBackground>
      <View style={styles.actions}>
        <View style={styles.actionCol1}>
          <Text style={styles.actionTitle}>{product}</Text>
          <Text style={styles.actionSubTitle}>{description}</Text>
        </View>
        <View style={styles.actionCol2}>
          <Icon name="trash" color="#E53C3C" size={20} />
          <Icon
            name="pencil"
            color="#ABDC55"
            size={20}
            style={{marginLeft: 10}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 230,
    borderRadius: 20,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    padding: 20,
    flex: 2,
    width: null,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageText: {
    color: '#E1E1E1',
  },
  actionCol1: {marginLeft: 10},
  actionCol2: {marginRight: 10, flexDirection: 'row'},
  actionTitle: {
    color: '#000',
  },
  actionSubTitle: {color: '#707070'},
});

export default Card;
