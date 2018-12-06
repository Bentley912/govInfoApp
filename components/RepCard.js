import React from 'react';
import {
  Text,
} from 'react-native';

import { 
  Card,
  Button,
  Icon,
  Divider,
  Avatar,
} from 'react-native-elements';

export default class RepCard extends React.Component {
    constructor(props) {
      super(props)
    }

    componentDidMount(){

      console.log(this.props.reps[1].photoUrl)
    }
    render(){
        return(
            <Card
            title={this.props.office.name}
            >
            <Avatar
                large
                rounded
                source={{uri:this.props.reps[this.props.office.officialIndices[0]].photoUrl }}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
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
            <Divider style={{ backgroundColor: 'blue' }} />
            <Text style={{textAlign:'center', fontWeight: 'bold'}}> Contact Information </Text>
            <Text> Phone: {this.props.reps[this.props.office.officialIndices[0]].phones[0]}</Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
            </Card>
        )
    }
}