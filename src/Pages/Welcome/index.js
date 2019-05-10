/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StatusBar, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../Services/api';
import {
  Container, Form, Title, Input, Button, Subtitle, ButtonText,
} from './styles';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    loading: false,
    error: false,
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('User');
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    const { username, loading, error } = this.state;

    return (
      <Container>
        <StatusBar backgroundColor="#444a5a" barStyle="light-content" />
        <Title>Bem-vindo</Title>
        <Subtitle>Para continuar, precisamos que informe seu usuario no Github</Subtitle>

        {error && <Subtitle>Usuario não encontrado</Subtitle>}

        <Form>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuario"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <Button onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <ButtonText>Prosseguir</ButtonText>
            )}
          </Button>
        </Form>
      </Container>
    );
  }
}
