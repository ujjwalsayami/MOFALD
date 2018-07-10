/**
 * Sample React Native App
 * Author : Ujjwal Manandhar
 * Date   : 2018-7-5 
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import SplashScreen from './components/SplashScreen';


export default class App extends Component<Props> {
  
  constructor(props) {
    super(props);
  
    this.state = {
      currentScreen : 'SplashScreen'
    };
    setTimeout(()=>{
      this.setState({ currentScreen : 'Home'})
    },3000)
  }

  render() {
    const {currentScreen} = this.state
    let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <Home />
    return mainScreen
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

