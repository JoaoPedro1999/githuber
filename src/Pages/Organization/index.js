import React from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Components/Header';

const Organization = () => (
  <>
    <View>
      <Header title="Organizações" />
      <Text>Testando</Text>
    </View>
  </>
);

Organization.navigationOptions = {
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
};

export default Organization;
