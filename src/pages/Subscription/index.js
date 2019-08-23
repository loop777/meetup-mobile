import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Subscription() {
  return <View />;
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="local-offer" size={20} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Subscription.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon,
};
