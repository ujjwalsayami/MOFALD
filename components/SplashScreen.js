import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';


export default class SplashScreen extends Component<Props> {
 state = {
    animating : true
  }

  closeActivityIndicator = ()=>setTimeout(()=>{
    this.setState({
      animating : false
    })
  },3000)

  componentDidMount = ()=> this.closeActivityIndicator()
  render() {
  	const animating = this.state.animating
    return (
      <View style={styles.container}>
        
        <Image
        	style={styles.imageStyle} 
        	source={require('../components/images/govlogo.png')} />
        <ActivityIndicator
               animating = {animating}
               color = '#b5b5b5'
               size = "large"/>
        <Text style={styles.welcome}>
          This is Splash Screen!
        </Text>
        
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
  imageStyle:{
  	height: 200,
  	width: 200,
  	borderRadius: 100
  }
});
