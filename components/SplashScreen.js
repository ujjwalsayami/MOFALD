/**
 * Sample React Native App
 * Author : Ujjwal Manandhar
 * Date   : 2018-7-5 
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';


export default class SplashScreen extends React.Component{

	render(){
		return(
			<View style={{flex: 1, justifyContent:  'center',
			 	alignItems: 'center' }}>
			 	<Image source={require('../components/images/govlogo.png')} />;

			</View>

			);
	}
}