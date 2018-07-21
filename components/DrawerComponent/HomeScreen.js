import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, ScrollView,
  TouchableOpacity, TouchableWithoutFeedback, Animated,
  Dimensions, SafeAreaView, StatusBar
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from './HeaderComponent';
import styles from '../../Screens/Styles/styles';


var images = [
  { id: 1, src: require('../../components/images/image1.jpeg') },
  { id: 2, src: require('../../components/images/image2.jpg') },
  { id: 3, src: require('../../components/images/image3.jpg') },
  { id: 4, src: require('../../components/images/image4.jpg') },
]
const texts = [
  {
    id: 1, someText: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu'
  },
  {
    id: 2, someText: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu'
  },
  {
    id: 3, someText: 'It allows you to start a project without \n' +
      'installing or configuring any tools to build native code - no Xcode o'
  },
  {
    id: 4, someText: 'Eiusmod consectetur cupidatat dolor Lorem \n' +
      'excepteur excepteur. Nostrud sint officia consectetur eu pariatur laboris'
  }
]


export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => {
      return (
        <FontAwesome name='home' size={28} color={tintColor} />
      );
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      activeImage: null,
    };
  }

  componentWillMount() {
    this.allImages = {}
    this.oldPosition = {}
    this.position = new Animated.ValueXY()
    this.dimensions = new Animated.ValueXY()
    this.animation = new Animated.Value(0)
    this.activeImageStyle = null

  }

  openImage = (index) => {
    this.allImages[index].measure((x, y, width, height, pageX, pageY) => {
      this.oldPosition.x = pageX
      this.oldPosition.y = pageY
      this.oldPosition.width = width
      this.oldPosition.height = height

      this.position.setValue({
        x: pageX,
        y: pageY
      })

      this.dimensions.setValue({
        x: width,
        y: height
      })

      this.setState({
        activeImage: images[index]
      }, () => {
        this.viewImage.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {

          Animated.parallel([
            Animated.timing(this.position.x, {
              toValue: dPageX,
              duration: 300
            }),
            Animated.timing(this.position.y, {
              toValue: dPageY,
              duration: 300
            }),
            Animated.timing(this.dimensions.x, {
              toValue: dWidth,
              duration: 300
            }),
            Animated.timing(this.dimensions.y, {
              toValue: dHeight,
              duration: 300
            }),
            Animated.timing(this.animation, {
              toValue: 1,
              duration: 300
            })
          ]).start()
        })
      })
    })
  }
  closeImage = () => {
    Animated.parallel([
      Animated.timing(this.position.x, {
        toValue: this.oldPosition.x,
        duration: 300
      }),
      Animated.timing(this.position.y, {
        toValue: this.oldPosition.y,
        duration: 250
      }),
      Animated.timing(this.dimensions.x, {
        toValue: this.oldPosition.width,
        duration: 250
      }),
      Animated.timing(this.dimensions.y, {
        toValue: this.oldPosition.height,
        duration: 250
      }),
      Animated.timing(this.animation, {
        toValue: 0,
        duration: 250
      })
    ]).start(() => {
      this.setState({
        activeImage: null
      })
    })
  }


  render() {
    const activeImageStyle = {
      width: this.dimensions.x,
      height: this.dimensions.y,
      left: this.position.x,
      top: this.position.y
    }

    const animatedContentY = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-150, 0]
    })

    const animatedContentOpacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1]
    })

    const animatedContentStyle = {
      opacity: animatedContentOpacity,
      transform: [{
        translateY: animatedContentY
      }]
    }

    const animatedCrossOpacity = {
      opacity: this.animation
    }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar 
         backgroundColor="blue" barStyle="light-content"/>
        <ScrollView style={styles.subContainer}>

          < HeaderComponent {...this.props} />

          {images.map((image, index) => {
            return (
              <TouchableOpacity
                onPress={() => this.openImage(index)}
                key={image.id}
                 >
                <Animated.View style={styles.imageContainer}>
                  <Image
                    ref={(image) => (this.allImages[index] = image)}
                    style={styles.imageStyle}
                    source={image.src} />

                </Animated.View>
              </TouchableOpacity>
            )
          })}


        </ScrollView>
        <View style={StyleSheet.absoluteFill}
          pointerEvents={this.state.activeImage ? 'auto' : 'none'} >

          <View style={{ flex: 2, zIndex: 1001, }}
            ref={(view) => (this.viewImage = view)} >
            <Animated.Image
              style={[{
                top: 0, left: 0, height: null,
                width: null
              }, activeImageStyle]}
              source={this.state.activeImage ? this.state.activeImage.src : null} >

            </Animated.Image>
            <TouchableWithoutFeedback onPress={() => this.closeImage()}>
              <Animated.View style={[{ position: 'absolute', top: 30, right: 30 }, animatedCrossOpacity]}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
                  X
                </Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>

          <Animated.View style={[styles.container,
          {
            backgroundColor: 'white', padding: 10, zIndex: 1000,
            paddingTop: 20
          }, animatedContentStyle]}>

            <Text style={{ fontSize: 20, paddingBottom: 10 }}>
              Ujjwal Manandhar </Text>
            {texts.map((text, index) => {
              return (
                <Text style={{ fontSize: 16, color: '#000000' }}
                  key={text.id}>{text.someText}
                </Text>)
            })}

          </Animated.View>

        </View>
      </SafeAreaView>
    );
  }
}

