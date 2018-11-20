import React from 'react';
import { 
    View, 
    StyleSheet, 
} from 'react-native';

import { 
    Button,
} from 'react-native-elements'


export default class InfoButton extends React.Component {
    constructor(props){
        super(props);
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
          <Button
            raised
            icon={{name: 'cached'}}
            title="Get Info"
            onPress={this._getVoterInfo}
        	/>

        )
    }

}