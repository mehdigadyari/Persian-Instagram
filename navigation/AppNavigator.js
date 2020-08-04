import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginNavigator from './LoginNavigator'
import MainTabNavigator from './MainTabNavigator'


export default createAppContainer(
  createSwitchNavigator({
    
    Login: LoginNavigator,
    Main: MainTabNavigator
  })
);
