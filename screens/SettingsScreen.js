import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';


import RepCard from '../components/RepCard';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        params: props.navigation.state.params,
        offices:props.navigation.state.params.data.offices,
        reps:props.navigation.state.params.data.officials,
    }
    this.renderOffices = this.renderOffices.bind(this);
  }
  
  static navigationOptions = {
    title: 'Your Representatives',
  };

  componentDidMount(){
    console.log(this.state);
  }

  renderOffices(){
    return this.state.offices.map((office, index) =>  
        <RepCard key={index} office={office} reps={this.state.reps} />
    );
  }
  render() {
    return(
        <ScrollView>
          {this.renderOffices()}
        </ScrollView>
    )
  }
}
