/**
 * Sample React Native App
 * Author : Ujjwal Manandhar
 * Date   : 2018-7-14 
 */

import React, { Component } from 'react';
import { 
  View
   } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from '../components/Login';
import Home from '../components/Home';
import SignUp from '../components/SignUp';

const RootStack = createStackNavigator({
  Login : {
    screen : Login,
   navigationOptions:()=>({
        header: null,

      })},

  Home : {
    screen : Home,
   navigationOptions:()=>({
        header: null,

      }),},

  SignUp: {
    screen : SignUp,
   navigationOptions:()=>({
     title:'Login Page',
      header: null,

      headerStyle:{
        backgroundColor: '#ef800d',
      },
      headerTitleStyle:{
        color: '#fff'
         }
      }),},
 },
  {
    initialRouteName: 'Login',
  },
  
  );



export default class RootNavigatorScreen extends Component {
  
  render() {
    return <RootStack navigation={this.props.navigation}/>;
  }
}


