import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import { 
  Card,
  Button,
  Icon,
} from 'react-native-elements';

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
    console.log(this.state.reps[this.state.offices[2].officialIndices[0]]);
  }

  renderOffices(){
    // return this.state.offices.map(() =>   
    // this.state.offices.map()
    //   //Key should be a unique identifier of each item
    //   //Ideally, an 'id' is usually the best key if you have one
    //   <Text>
    //     Office Goes Here
    //   </Text>
    // );
  }
  render() {
    return(
        this.state.offices.map((office,index) =>   

        <Card
        title={office.name}
        >
        <Text style={{marginBottom: 10}}>
          Name: {this.state.reps[office.officialIndices[0]].name}
        </Text>
        <Text>
          Address: {this.state.reps[office.officialIndices[0]].address[0].line1}
        </Text>
        <Text>
          City: {this.state.reps[office.officialIndices[0]].address[0].city}
        </Text>
        <Text>
          State: {this.state.reps[office.officialIndices[0]].address[0].state}
        </Text>
        <Text>
          Address: {this.state.reps[office.officialIndices[0]].address[0].zip}
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
        </Card>
        )
    )
  }
}
