import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Image } from 'react-native';

import logo from '~/assets/header.png';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Subscription from './pages/Subscription';
import Profile from './pages/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createStackNavigator(
          {
            Interface: {
              screen: createBottomTabNavigator(
                {
                  Dashboard,
                  Subscription,
                  Profile,
                },
                {
                  tabBarOptions: {
                    keyboardHidesTabBar: true,
                    activeTintColor: '#fff',
                    inactiveTintColor: 'rgba(255,255,255,0.6)',
                    style: {
                      backgroundColor: '#2B1A2F',
                    },
                  },
                }
              ),
            },
          },
          {
            headerLayoutPreset: 'center',
            defaultNavigationOptions: {
              headerTitle: <Image source={logo} />,
              headerStyle: {
                backgroundColor: 'rgba(0,0,0,0.3)',
              },
              headerTransparent: true,
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
