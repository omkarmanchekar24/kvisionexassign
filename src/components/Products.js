/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal, {SlideAnimation, ModalContent} from 'react-native-modals';

//Components
import Card from './common/Card';
import Filter from './Filter';

class Products extends Component {
  state = {visible: false};

  renderItem = ({item}) => {
    return <Card product={item.product} description={item.description} />;
  };

  showFilter = () => {
    this.setState({
      visible: true,
    });
  };

  hideFilter = () => {
    this.setState({
      visible: false,
    });
    return true;
  };

  render() {
    const data = [
      {
        product: 'Mango',
        description: 'anklet',
      },
      {
        product: 'Mango',
        description: 'anklet',
      },
      {
        product: 'Mango',
        description: 'anklet',
      },
      {
        product: 'Mango',
        description: 'anklet',
      },
    ];

    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerColumn1}>
              <Icon name="west" size={25} onPress={() => Actions.welcome()} />
              <Text style={styles.headerTitle}>Products Listed</Text>
            </View>
            <View style={styles.headerColumn2}>
              <Icon name="filter-alt" size={25} onPress={this.showFilter} />
            </View>
          </View>
          <View style={styles.body}>
            {data.map((item, index) => (
              <Card
                key={index}
                product={item.product}
                description={item.description}
              />
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.buttonAdd} onPress={() => {}}>
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
        <Modal
          visible={this.state.visible}
          modalAnimation={
            new SlideAnimation({
              slideFrom: 'bottom',
            })
          }
          rounded={false}
          onDismiss={this.hideFilter}
          onTouchOutside={this.hideFilter}
          onHardwareBackPress={this.hideFilter}>
          <ModalContent>
            <Filter onRemovePress={this.hideFilter} />
          </ModalContent>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F7F7F7'},
  header: {
    flexDirection: 'row',
    height: 100,
    padding: 20,
    justifyContent: 'space-between',
  },
  headerColumn1: {},
  headerColumn2: {justifyContent: 'flex-end'},
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 5,
  },
  body: {padding: 30},
  buttonAdd: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 40,
    right: 20,
    height: 70,
    backgroundColor: '#3E45A9',
    borderRadius: 100,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
});

export default Products;
