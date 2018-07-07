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
  View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';


const App = createStackNavigator({

  Login : { screen : Login,
    navigationOptions : ()=>({
      header : null
    })
  },

  Home : { screen : Home,
    navigationOptions : ()=>({
      header : null
    })
  },
},
  {
    initialRouteName : 'Home',
  },

);

export default App;