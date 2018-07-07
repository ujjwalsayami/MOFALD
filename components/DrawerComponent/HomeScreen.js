import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from './HeaderComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomeScreen extends Component<Props> {
  static navigationOptions = {
     drawerIcon:({tintColor}) =>{
        return(
          <FontAwesome name='home' size={28} color={tintColor} />
          );
          }
  }

  render() {
    return (
      <View style={styles.container}>
        < HeaderComponent {...this.props} />
        <View style={styles.subContainer}>
          <Text style={styles.welcome}>
            Welcome to HomeScreen
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer:{
    display: 'flex',
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
