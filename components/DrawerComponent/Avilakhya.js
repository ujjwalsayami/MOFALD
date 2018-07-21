import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

export default class Avilakhya extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{flexDirection: 'row' ,
					alignItems: 'center',height:60, backgroundColor: '#3b5998' }}>
		        
		        <TouchableHighlight 
		       		 underlayColor="#395693"
		        	style={{marginLeft:10, backgroundColor: '#3b5998', }}
		        	onPress={()=>{this.props.navigation.openDrawer()}}>
		        	
		        	<View style={{ flexDirection: 'row', padding: 10 }}>
				         <Ionicons name={`${ICON_PREFIX}-menu`} size={40}  color='#fff' />

				        	<Text style={{color: 'white', fontSize: 20, 
				        	 	marginLeft:10, margin: 10, fontWeight: '300'}}>
				        		Avilakhya
				        	</Text>
			        	</View>
			         </TouchableHighlight>
		          	
			</View>
        <Text style={styles.welcome}>
          Welcome to Avilakhya
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button title="Paripatra"
          onPress={()=>{this.props.navigation.navigate('Paripatra')}}/>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        
        <Button title="Suchana"
          onPress={()=>{this.props.navigation.navigate('Suchana')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
