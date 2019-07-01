// Vendor
import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

// Screens
import Landing from '../screens/Landing';
import WaitingRoom from '../screens/WaitingRoom';


/**
 * Main navigation stack
 */
const MainStack = createStackNavigator(
  {
    Home: {
      screen: Landing,
    },
    WaitingRoom: {
      screen: WaitingRoom,
    },
  },
);


export default createAppContainer(
  createSwitchNavigator({
    Main: MainStack,
  })
);
