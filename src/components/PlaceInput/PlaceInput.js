import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {

    state = {
        namaTempat: "",
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
        this.props.onAddTempat(this.state.namaTempat);
      };

    render() {
        const { inputContainer, inputTempat, buttonTempat } = styles;
        return (
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
        );
    }
}

const styles = {
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
};

export default PlaceInput;