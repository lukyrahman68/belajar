import React from 'react'; 
import { View } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = (props) => {
    const showTempat = props.tempat.map((val, i) => {
        return (
          <ListItem 
            key= { i }
            text= {val}
            onPress= {() => alert("Item pressed - ID: "+ i)}
          />
        );
      });
    return (
        <View style={styles.listContainer}>
          {showTempat}
        </View>
    );
}
styles = { 
  listContainer: {
    width: "100%"
  }
}

export default PlaceList;
