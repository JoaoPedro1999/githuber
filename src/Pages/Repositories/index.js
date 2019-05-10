import React from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Components/Header';

const Repositories = () => (
  <>
    <View>
      <Header title="Repositorios" />
      <Text>Testando</Text>
    </View>
  </>
);

Repositories.navigationOptions = {
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
};

export default Repositories;
