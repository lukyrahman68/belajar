import React, {Component} from 'react';
import { View } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
  
  state = {
    tempat: []
  };

  onAdd = (namaTempat) => {
    this.setState((prevState) => {
      return {
        tempat: prevState.tempat.concat(namaTempat)
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <PlaceInput 
          onAddTempat= {this.onAdd}
        />
        <PlaceList 
          tempat= {this.state.tempat}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
};
