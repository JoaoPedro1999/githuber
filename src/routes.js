import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Welcome from './Pages/Welcome';
import Repositories from './Pages/Repositories';
import Organization from './Pages/Organization';

const Routes = (userLogger = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      User: createBottomTabNavigator(
        {
          Repositories,
          Organization,
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255, 255, 255, 0.3)',
            style: {
              backgroundColor: '#444A5A',
            },
          },
        },
      ),
    },
    { initialRouteName: userLogger ? 'User' : 'Welcome' },
  ),
);

export default Routes;
