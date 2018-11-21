import React from 'react';
import { 
    View, 
    StyleSheet, 
} from 'react-native';

import { 
    FormLabel, 
    FormInput, 
    Button,
  } from 'react-native-elements'

  import InfoButton from './InfoButton';

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
    }
    handleCity = (text) => {
        this.setState({ city: text })
    }
    handleState = (text) => {
        this.setState({state: text })
    }
    handleZip = (text) => {
        this.setState({ zip: text })
    }

    _getVoterInfo(){
        // fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=' + this.props.API_KEY + '&address='  + state.line1 + '%20' + state.city + '%20' + state.state + '%20' + state.zip)
        // .then(function(data){
        //   results = data.json().then(function(data){
        //     console.log(data.offices);
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
            
            <InfoButton info={this.state} API_KEY={this.props.API_KEY} />
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