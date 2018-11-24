import React from 'react';
import {
	View,
	ActivityIndicator,
} from 'react-native'

import { 
    Button,
} from 'react-native-elements'


export default class InfoButton extends React.Component {
    constructor(props){
		super(props);
		this.getVoterInfo = this.getVoterInfo.bind(this);
    }

	getVoterInfo(){
		this.setState({ isFetching: true});
		this.props.onFetchStart();
		fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=' + API_KEY + '&address='  + newLine1 + '%20' + newCity + '%20' + newState + '%20')
		.then((data) => {
			results = data.json()
		.then((data) => {
			this.setState({data, isFetching:false});
			this.props.onFetchEnd();
			console.log(this.state.data);
			console.log('Ended Fetch:' + this.props.isFetching);
			});
		})
		.catch((error) => {
			console.log(error);
		})  
	}

	componentDidMount(){
		console.log(this.state);
		API_KEY = this.props.API_KEY;
	}

	componentDidUpdate(){
		//Logic adds '%20' in place of spaces in address fields in order to correctly query the API 
		newLine1 = (this.props.info.line1.split(' ').join('%20'));
		newCity = (this.props.info.city.split(' ').join('%20'));
		newState = (this.props.info.state.split(' ').join('%20'));
		// console.log(newLine1);
	}


    render() {
		const myButton = 
		<Button
			raised
			icon={{name: 'cached'}}
			title="Get Info"
			onPress={this.getVoterInfo}
		/>
        const spinner = <ActivityIndicator size="large" color="#0000ff" />

        return (
			<View>
			{this.props.isFetching ? spinner : myButton}
			</View>
        )
    }

}