import React, { Component } from 'react';
import {
  StyleSheet,
  Text,Dimensions,
  View,
  Image,
  ActivityIndicator
} from 'react-native';

let imageWidth = Dimensions.get('window').width / 2;
let imageHeight = Dimensions.get('window').height / 2;
export default class SplashScreen extends Component {
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
          resizeMode="contain"
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
  	height: imageWidth,
  	width: imageHeight,
  	borderRadius: imageHeight / 2
  }
});
