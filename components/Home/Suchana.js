import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Suchana extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar translucent={false} barStyle="default" />
        <Text style={styles.welcome}>
          Welcome to SuchanaScreen ujjwal
        </Text>
        <Button title="Go to Press"
          onPress={()=>{this.props.navigation.navigate('Press')}}/>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button title="ListItemScreen"
          onPress={()=>{this.props.navigation.navigate('ListItemScreen')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
