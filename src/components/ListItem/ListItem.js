import React from 'react';
import { View, Text } from 'react-native';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>
                {props.text}
            </Text>
        </View>
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