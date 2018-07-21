import React from 'react';
import {
	View,Text,StyleSheet,Image,
	Button,TouchableHighlight,
	Platform

} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
export default class HeaderComponent extends React.Component{

	render(){
		return(
			<View style={{flexDirection: 'row' ,
					alignItems: 'center',height:60, backgroundColor: '#3b5998' }}>
		        
		        <TouchableHighlight 
		       		 underlayColor="#395693"
		        	style={{marginLeft:10, backgroundColor: '#3b5998', }}
		        	onPress={()=>{this.props.navigation.openDrawer()}}>
		        	
		        	<View style={{ flexDirection: 'row', padding: 10 }}>
				         <Ionicons name={`${ICON_PREFIX}-menu`} size={45}  color='#fff' />

				        	<Text style={{color: 'white', fontSize: 20, 
				        	 	marginLeft:10, margin: 10, fontWeight: 'bold'}}>
				        		Menu
				        	</Text>
			        	</View>
			         </TouchableHighlight>
		          	
			</View>   
			);
	}

}

