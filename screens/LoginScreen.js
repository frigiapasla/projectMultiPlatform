import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username   : '',
      password: '',
      message: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLogin(e){
      if(this.state.username !== 'test'){
          this.setState({message: "Username Salah"});
          return;
      }

      if(this.state.password !== '1234'){
          this.setState({message: "Password Salah"});
          return;
      }

      return this.props.navigation.navigate('Home');
  }

  handleUsernameChange(text){
      this.setState({username: text})
  }

  handlePasswordChange(text){
      this.setState({username: text})
  }



//   onClickListener = (viewId) => {
//     Alert.alert("Alert", "Button pressed "+viewId);
//   }


  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={{ uri: "https://lorempixel.com/900/1400/nightlife/2/" }}/>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Username"
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}/>
        </View>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={this.handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginRight:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  }
}); 