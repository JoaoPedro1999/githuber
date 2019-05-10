/* eslint-disable react/no-unused-state */
import './config/DevToolsConfig';
import './config/ReactotronConfig';
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import createNavigator from './routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogger: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');

    this.setState({
      userChecked: true,
      userLogger: !!username,
    });
  }

  render() {
    const { userChecked, userLogger } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogger);

    return <Routes />;
  }
}
