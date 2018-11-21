import React from 'react';
import { 
    Button,
} from 'react-native-elements'


export default class InfoButton extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			line1:'',
		}
		this.getVoterInfo = this.getVoterInfo.bind(this);
    }

	getVoterInfo(){
		fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=' + API_KEY + '&address='  + newLine1 + '%20' + newCity + '%20' + newState + '%20')
		.then(function(data){
			results = data.json().then(function(data){
			console.log(data);
			});
		
		})
		.catch(function(error){
			console.log(error);
		})  
		console.log('Request Url:' + ('https://www.googleapis.com/civicinfo/v2/representatives?key=' + API_KEY + '&address='  + newLine1 + '%20' + newCity + '%20' + newState + '%20'))
	}

		componentDidMount(){
			console.log(this.props);
			API_KEY = this.props.API_KEY;
		}

		componentDidUpdate(){
			//Logic adds '%20' to spaces in address fields in order to correctly query the API correctly
			newLine1 = (this.props.info.line1.split(' ').join('%20'));
			newCity = (this.props.info.city.split(' ').join('%20'));
			newState = (this.props.info.state.split(' ').join('%20'));
			console.log(newLine1);
		}

    render() {
        return (
          <Button
            raised
            icon={{name: 'cached'}}
            title="Get Info"
            onPress={this.getVoterInfo}
        	/>
        )
    }

}