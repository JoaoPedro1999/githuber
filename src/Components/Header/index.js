/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Header, Left, Title, Button,
} from './styles';

class header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  };

  render() {
    const { title } = this.props;

    return (
      <Header>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <Left />
        <Title>{title}</Title>
        <Button onPress={this.signOut}>
          <Icon name="exchange" size={16} color="#000" />
        </Button>
      </Header>
    );
  }
}

export default withNavigation(header);
