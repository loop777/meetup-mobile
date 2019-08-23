import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { FlatList, Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import api from '~/services/api';

import { Container } from './styles';

function Subscription({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('subscriptions');

      setSubscriptions(response.data);
    }

    loadSubscriptions();
  }, [isFocused]);

  async function handleUnsubscribe(id) {
    try {
      await api.delete(`unsubscribe/${id}`);
      setSubscriptions(
        subscriptions.filter(subscription => subscription.id !== id)
      );
      Alert.alert('Sucesso!', 'Inscrição cancelada');
    } catch (err) {
      Alert.alert('Falha!', 'Erro ao cancelar inscrição');
    }
  }

  return (
    <Background>
      <Container>
        <FlatList
          data={subscriptions}
          keyExtractor={subscription => String(subscription.meetup_id)}
          renderItem={({ item: subscription }) => (
            <Meetup
              data={subscription.meetup}
              onButtonClick={() => handleUnsubscribe(subscription.id)}
              subscription
            />
          )}
          style={{ marginTop: 80 }}
        />
      </Container>
    </Background>
  );
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

Subscription.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Subscription);
