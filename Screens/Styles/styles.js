import {
    StyleSheet,
    Dimensions
} from 'react-native';


let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flex: 1,

    },
    subContainer: {
        flex: 0.5,
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
    imageContainer: {
        height: screenHeight - 100,
        width: screenWidth,
        padding: 15
    },
    imageStyle: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderRadius: 20
    }


});