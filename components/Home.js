import React from 'react';

import {
  View, Text, FlatList, SafeAreaView,
  Button, Image, StyleSheet, ScrollView,
  Dimensions, TouchableOpacity,
  Platform
} from 'react-native';

import { createStackNavigator,SwitchNavigator,
  DrawerItems, createDrawerNavigator, TabBarTop } from 'react-navigation'; // Version can be specified in package.json
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Aboutus from '../components/DrawerComponent/Aboutus';
import Profile from '../components/DrawerComponent/Profile';
import HomeScreen from '../components/DrawerComponent/HomeScreen';
import PressBigyapti from '../components/DrawerComponent/PressBigyapti';
import Avilakhya from '../components/DrawerComponent/Avilakhya';
import SaruwaBaduwa from '../components/DrawerComponent/SaruwaBaduwa';
import StaffProfile from '../components/DrawerComponent/StaffProfile';
import ParichayNirdeshan from '../components/DrawerComponent/ParichayNirdeshan';

// This is for Avilakhya Screeen
import Adhikrit from '../components/Home/Adhikrit';
import JanaPratinidhi from '../components/Home/JanaPratinidhi';
import Paripatra from '../components/Home/Paripatra';
import Press from '../components/Home/Press';
import Saruwa from '../components/Home/Saruwa';
import Suchana from '../components/Home/Suchana';

import ListItemScreen from '../components/Home/ListItemScreen';

const { width } = Dimensions.get('window')

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

let drawerHeaderComponent = null;

if (Dimensions.get('window').height > 80) {
  drawerHeaderComponent = (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#616161',
          alignItems: 'center',
          justifyContent: 'center',
          height: 200,

        }}
      >
        <View style={{ flexDirection: 'column', justifyContent: 'center', }}>
          <Image
            style={{ width: 100, height: 100, resizeMode: Image.resizeMode.center, borderRadius: 12, }}
            source={require('../components/images/profileicon.png')}
          />
          <Text style={{ color: 'white', fontSize: 20 }}>
            Ujjwal Manandhar
           </Text>

        </View>
      </View>
    </ScrollView>

  );
}

const DrawerContent = (props) => (
  <SafeAreaView style={{ flex: 1 }} forceInset={{
    top: 'always',
    horizontal: 'never', margin: 10, padding: 10
  }}>
    <ScrollView>
      {drawerHeaderComponent}
      <DrawerItems {...props} />
      <View style={{ marginLeft: 10 }}>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }}
          style={{ flexDirection: 'row', padding: 10 }}>
          <FontAwesome name='sign-out' size={25} />

          <Text style={{ marginLeft: 30, fontWeight: 'bold', color: '#000000' }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  </SafeAreaView>
)


let RouteConfigs = {

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      drawerLabel: 'Home',
      showIcon: 'true',
      drawerIcon: ({ tintColor }) => {
        return (
          <FontAwesome name='home' size={25} color={tintColor} />
        )
      },
    }),
  },

  PressBigyapti: {
    screen: PressBigyapti,
    navigationOptions: () => ({
      drawerLabel: 'PressBigyapti',
      activeTintColor: '#ff0000',
      drawerIcon: ({ tintColor }) => {
        return (
          <Ionicons name={`${ICON_PREFIX}-microphone`} size={25} color={tintColor} />
        )
      },
    }),
  },

  Avilakhya: {
    screen: Avilakhya,
    navigationOptions: () => ({

      drawerLabel: 'Avilakhya',
      drawerIcon: ({ tintColor }) => {
        return (
          <Ionicons name={`${ICON_PREFIX}-search`} size={25} color={tintColor} />)
      },
    }),
  },

  ParichayNirdeshan: {
    screen: ParichayNirdeshan,
    navigationOptions: () => ({
      drawerLabel: 'ParichayNirdeshan',
      drawerIcon: ({ tintColor }) => {
        return (
          <Ionicons name={`${ICON_PREFIX}-link`} size={25} color={tintColor} />)
      },
    }),
  },

  SaruwaBaduwa: {
    screen: SaruwaBaduwa,
    navigationOptions: () => ({

      drawerLabel: 'SaruwaBaduwa',
      drawerIcon: ({ tintColor }) => {
        return (
          <Entypo name='direction' size={25} color={tintColor} />)
      },

    }),
  },

  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      drawerLabel: 'Profile',

      drawerIcon: ({ tintColor }) => {

        return (
          <FontAwesome name='user-circle' size={24} color={tintColor} />)
      },
    }),
  },

  StaffProfile: {
    screen: StaffProfile,
    navigationOptions: () => ({
      gesturesEnabled: false,
      drawerLabel: 'StaffProfile',
      drawerIcon: ({ tintColor }) => {
        return (
          <Ionicons name={`${ICON_PREFIX}-eye`} size={25} color={tintColor} />)
      },

    }),
  },

  Aboutus: {
    screen: Aboutus,
    navigationOptions: () => ({

      drawerLabel: 'About Us',
      drawerIcon: ({ tintColor }) => {
        return (
          <FontAwesome name='mobile-phone' size={25} color={tintColor} />)
      },
    }),

  },


}

let DrawerNavigatorConfig = {
  initialRouteName: 'HomeScreen',
  drawerWidth: width - 50,
  showIcon: true,
  gesturesEnabled: true,
  contentComponent: DrawerContent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: 'red',
    inactiveTintColor: '#0d0c0c',
    showIcon: true,
  },

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: '100%'
  },
  topLogo: {
    justifyContent: 'center',
    margin: 10,
    height: 25,
    width: 25,
    borderRadius: 0,
  },

  textStyle: {
    color: '#111111',
    textAlign: 'center',
    margin: 30,
    paddingTop: 20,
    fontSize: 20,
  },
  imageSize: {
    height: '30%',
    width: '100%',
    marginLeft: 10,
    flex: 1,
    position: 'absolute',
  },
  icon: {
    width: 26, height: 26,
  },

});


const SuchanaStack = createStackNavigator({
  
  Suchana: {
    screen: Suchana,
    navigationOptions: () => ({
      title:'Suchana',

    })
  },

  ListItemScreen: {
    screen: ListItemScreen,
    navigationOptions: () => ({
      title: 'ListITemScreen',

    })
  },
});


const AvilakhyaStack = SwitchNavigator({
  

  Suchana: {
    screen: SuchanaStack,
    navigationOptions: () => ({
      header: null,

    })
  },

  Press: {
    screen: Press,
    navigationOptions: () => ({
      header: null,

    }),
  },

  Paripatra: {
    screen: Paripatra,
    navigationOptions: () => ({
      title: 'Login Page',
      header: null,

      headerStyle: {
        backgroundColor: '#ef800d',
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }),
  },

  Saruwa: {
    screen: Saruwa,
    navigationOptions: () => ({
      title: 'Login Page',
      header: null,

      headerStyle: {
        backgroundColor: '#ef800d',
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }),
  },

  JanaPratinidhi: {
    screen: JanaPratinidhi,
    navigationOptions: () => ({
      title: 'Login Page',
      header: null,

      headerStyle: {
        backgroundColor: '#ef800d',
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }),
  },

  Adhikrit: {
    screen: Adhikrit,
    navigationOptions: () => ({
      title: 'Login Page',
      header: null,

      headerStyle: {
        backgroundColor: '#ef800d',
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }),
  },
});

const DrawerNavigatorScreen = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);


export default createStackNavigator({

  DrawerNab : {
    screen:DrawerNavigatorScreen,
    navigationOptions: () => ({
      header: null,
    }),
  
  },
  Avilakhya:{
    screen:AvilakhyaStack,
    navigationOptions:()=>({
      header: null,
    }),
  }


});
