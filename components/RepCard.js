import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import { 
  Card,
  Button,
  Icon,
} from 'react-native-elements';

export default class RepCard extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount(){
        console.log('Card Props: ' + this.props);
    }
    render(){
        return(
            <Card
            title={this.props.office.name}
            >
            <Text style={{marginBottom: 10}}>
              Name: {this.props.reps[this.props.office.officialIndices[0]].name}
            </Text>
            <Text>
              Address: {this.props.reps[this.props.office.officialIndices[0]].address[0].line1}
            </Text>
            <Text>
              City: {this.props.reps[this.props.office.officialIndices[0]].address[0].city}
            </Text>
            <Text>
              State: {this.props.reps[this.props.office.officialIndices[0]].address[0].state}
            </Text>
            <Text>
              Zip: {this.props.reps[this.props.office.officialIndices[0]].address[0].zip}
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
            </Card>
        )
    }
}