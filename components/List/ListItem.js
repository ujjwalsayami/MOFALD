import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';


const ListItem = ({ text, onPress, selected }) => (
    <TouchableHighlight onPress={onPress}
        underlayColor='#ddd' >
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'space-between'
            }} >

            <Text> {text} </Text>
            {selected ? <Text>Selected</Text> : null}
        </View>

    </TouchableHighlight>

);

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
}

export default ListItem;