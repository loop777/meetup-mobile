import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Profile() {
  return <View />;
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="person" size={20} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon,
};
