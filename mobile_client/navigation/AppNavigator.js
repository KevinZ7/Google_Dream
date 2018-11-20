import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MainStack from './MainNavigator';

export default createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: { screen: MainStack },
},
  {
    headerMode: 'none'
  }
);