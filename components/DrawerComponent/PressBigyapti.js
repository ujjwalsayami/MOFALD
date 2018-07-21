import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';
//import ListItem from '../List/ListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const separator =()=>{
<View style={{height:StyleSheet.hairlineWidth,flex:1,
 backgroundColor:'black'}} />; 
}

const TEMP_CURRENT_VALUE = 'Kamren';
export default class PressBigyapti extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
    }

  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    this.setState({ dataList: json });
  }

  handleOnPress = () => {
    console.log('row pressed');
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to PressBigyapti
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.dataList}
            renderItem={({ item }) =>

              <TouchableHighlight onPress={() => { }}
                underlayColor='#ddd' style={{ flex: 1, justifyContent: 'flex-start', }} >
                <View
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    justifyContent: 'space-between'
                  }} >
                  <Text style={{ color: '#000' }}> {item.username} </Text>

                </View>
              </TouchableHighlight>
            }
            keyExtractor={(item, index) => index.toString()}
        //  ItemSeparatorComponent= {<separator/>}
          />
        </View>
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
