import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableHighlight onPress= {props.onPress}>
            <View style={styles.listItem}>
                <Text>
                    {props.text}
                </Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = {
    listItem: {
        width: "100%",
        margin: 5,
        padding: 10,
        backgroundColor: "#eee" 
    }
};

export default ListItem;