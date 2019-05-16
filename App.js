import React, {Component} from 'react';
import { Button, Text, View, TextInput} from 'react-native';
import ListItem from './src/components/ListItem/ListItem'

export default class App extends Component {
  
  state = {
    namaTempat: "",
    tempat: []
  };
  onChangeNamaTempat= (value) => {
    this.setState({
      namaTempat: value
    });
  };

  onClickTambah = () => {
    if(this.state.namaTempat.trim()===""){
      return;
    }
    this.setState((prevState) => {
      return {
        tempat: prevState.tempat.concat(prevState.namaTempat)
      };
    });
  };

  render() {
    console.log(this.state);
    const { 
      container, 
      inputContainer,
      inputTempat,
      buttonTempat,
      listContainer
    } = styles;
    const showTempat = this.state.tempat.map((val, i) => {
      return (
        <ListItem 
          key= { i }
          text= {val}
        />
      );
    });
    return (
      <View style={container}>
        <View style= { inputContainer }>
          <TextInput 
            style= { inputTempat }
            value= {this.state.namaTempat}
            onChangeText= {this.onChangeNamaTempat}
            placeholder="Percobaan Placeholder"
          />
          <Button 
            title="Tambah"
            style= { buttonTempat }
            onPress= {this.onClickTambah}
          />
        </View>
        <View style={listContainer}>
          {showTempat}
        </View>
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
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center"
  },
  inputTempat: {
    width: "70%",
    borderColor: "black", 
    borderBottomWidth: 1, 
    marginBottom: 10
  },
  buttonTempat: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
};
