import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from './HeaderComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

var images = [
    {id:1, src: require('../../components/images/image1.jpeg')},
    {id:2, src: require('../../components/images/image2.jpg')},
    {id:3, src: require('../../components/images/image3.jpg')},
    {id:4, src: require('../../components/images/image4.jpg')}
      ]       
  

type Props = {};
export default class HomeScreen extends Component<Props> {
  static navigationOptions = {
     drawerIcon:({tintColor}) =>{
        return(
          <FontAwesome name='home' size={28} color={tintColor} />
          );
          }
        }

constructor(props) {
  super(props);

  this.state = {
    activeImage : null,
  };
}

  componentWillMount(){
    this.allImages = {

    }
    this.oldPosition={

    }
    this.position = new Animated.ValueXY()
    this.dimensions = new Animated.ValueXY()

  }

  openImage = (index)=>{ 
    this.allImages[index].measure((x,y,width,height,pageX,pageY)=>{
      this.oldPosition.x = pageX
      this.oldPosition.y = pageY
      this.oldPosition.width = width
      this.oldPosition.height = height

      this.position.setValue({
        x:pageX,
        y:pageY
      })

      this.dimensions.setValue({
        x:width,
        y:height
      })

      this.setState({
        activeImage:images[index]
      }),()=>{
        this.viewImage.measure((dx,dy,dWidth,dHeight,dPageX,dPageY)=>{
          Animated.parallel([
            Animated.timing(this.position.x, {
              toValue:dPageX,
              duration:300
            }),
            Animated.timing(this.position.y, {
              toValue:dPageY,
              duration:300
            }),
            Animated.timing(this.dimensions.x, {
              toValue:dWidth,
              duration:300
            }),
            Animated.timing(this.dimensions.y, {
              toValue:dHeight,
              duration:300
            })
            ]).start()
        })
      }
    })
  }
  
   
  render() {
    const activeImageStyle = {
      width  : this.dimensions.x,
      height : this.dimensions.y,
      left   : this.position.x,
      top    : this.position.y 
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          
          < HeaderComponent {...this.props} />
          <View style={styles.subContainer}>
            
            <Text style={styles.welcome}>
              Welcome to HomeScreen 
            </Text>
            {images.map((image, index) =>{
              return(
                <TouchableOpacity 
                  onPress={()=>this.openImage(index)}
                  key={image.id} > 
                  <Animated.View style={styles.imageContainer}>
                    <Image 
                      ref={(image)=>(this.allImages[index] = image)}
                      style={styles.imageStyle}  
                      source = {image.src} />
                                     
                  </Animated.View>
                </TouchableOpacity>
             )
            })}
            <Text style={styles.instructions}>
              To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
              {instructions}
            </Text>
          </View>

        </ScrollView>
        <View style={StyleSheet.absoluteFill}
          pointerEvents={this.state.activeImage ? 'auto' : 'none'} >
          
          <View style={{flex:2,  borderWidth: 2}}
           ref={(view)=>(this.viewImage = view) } >
            <Animated.Image
              style={[{resizeMode: 'cover', top: 0, left:0,height:null, width: null}, activeImageStyle ]}
             source = {this.state.activeImage ? this.state.activeImage.src : null} >

            </Animated.Image>
          </View>
          <View style={styles.container}>

          </View>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer:{
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
  imageContainer:{
    height: screenHeight - 100,
    width: screenWidth ,
    padding: 15
  },
   imageStyle:{
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 20
  }
});
