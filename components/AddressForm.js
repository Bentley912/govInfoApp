import React from 'react';
import { 
    View, 
    StyleSheet, 
} from 'react-native';

import { 
    FormLabel, 
    FormInput, 
    FormValidationMessage,
    Button,
  } from 'react-native-elements'

  export default class AddressForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         
          line1: '',
          city: '',
          state: '',
          zip: '',
        };

    }

    handleLine1 = (text) => {
        this.setState({ line1: text })
        console.log(this.state);
    }
    handleCity = (text) => {
        this.setState({ city: text })
        console.log(this.state);
    }
    handleState = (text) => {
        this.setState({state: text })
        console.log(this.state);
    }
    handleZip = (text) => {
        this.setState({ zip: text })
        console.log(this.state);
    }

    _getVoterInfo(){
        // fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=' + state.API_KEY + '&address='  + state.line1 + '%20' + state.city + '%20' + state.state + '%20' + state.zip)
        // .then(function(data){
        //   results = data.json().then(function(data){
        //     console.log(data.officials[0]);
        //   });
         
        // })
        // .catch(function(error){
        //   console.log(error);
        // })                   
      }
    
    render() {
        return (
            <View style={styles.getStartedContainer}>


            <FormLabel>Address Line 1</FormLabel>
            <FormInput 
            	onChangeText={this.handleLine1}
            />
            <FormLabel>City</FormLabel>
            <FormInput 
							onChangeText={this.handleCity}
            />
            <FormLabel>State</FormLabel>
            <FormInput 
							onChangeText={this.handleState}
						/>
            <FormLabel>Zip</FormLabel>
            <FormInput 
							onChangeText={this.handleZip}
						/>
            
            <Button
             raised
             icon={{name: 'cached'}}
             title="Get Info"
             onPress={this._getVoterInfo}
            />
          </View>
        )
    }
  }

  const styles = StyleSheet.create({
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
      },
  })