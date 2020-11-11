import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

//Components
import Input from './common/Input';
import Button from './common/Button';

class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Welcome {'\n'} back!</Text>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Input placeholder="Enter Email or Mobile" style={{marginTop: 10}} />
          <Input placeholder="Password" secureTextEntry={true} />
          <Button
            buttonContainerStyle={styles.forgotButton}
            buttonTextStyle={styles.forgetText}
            text="Forgot password"
          />
          <Button
            buttonContainerStyle={styles.loginButton}
            buttonTextStyle={styles.loginText}
            text="Login"
          />
          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
            <Text>or</Text>
            <Button
              text="Sign up"
              buttonContainerStyle={styles.signUpButton}
              buttonTextStyle={styles.signUpText}
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
    backgroundColor: '#ABDC55',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 30,
  },
  formContainer: {
    backgroundColor: '#fff',
    height: 500,
    width: Dimensions.get('window').width,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  forgotButton: {
    marginTop: 10,
  },
  forgetText: {color: '#A2A2A2', fontSize: 13, fontWeight: 'bold'},
  loginButton: {
    marginTop: 80,
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
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signUpButton: {marginLeft: 5},
  signUpText: {fontWeight: 'bold'},
  nextScreenButton: {
    alignSelf: 'flex-end',
    marginTop: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#3E45A9',
    borderColor: '#fff',
  },
  nextScreenText: {color: '#fff'},
});

export default SignIn;
