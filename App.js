/**
 * Sample React Native App
 * Author : Ujjwal Manandhar
 * Date   : 2018-7-5 
 */

import React, { Component } from 'react';

import { 
  View
   } from 'react-native';
import RootNavigatorScreen from './components/RootNavigatorScreen';
import SplashScreen from './components/SplashScreen';


export default class App extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      currentScreen : 'SplashScreen'
    };
    setTimeout(()=>{
      this.setState({ currentScreen : 'RootNavigatorScreen'})
    },3000)
  }

  render() {
    const {currentScreen} = this.state
    let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <RootNavigatorScreen />
    return mainScreen
  }
}

