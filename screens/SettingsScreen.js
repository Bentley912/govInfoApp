import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        params: props.navigation.state.params
    }
}
  
  static navigationOptions = {
    title: 'app.json',
  };

  componentDidMount(){
    console.log(this.state);
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
