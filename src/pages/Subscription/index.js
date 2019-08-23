import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import api from '~/services/api';

import { Container } from './styles';

export default function Subscription() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('subscriptions');

      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

  return (
    <Background>
      <Container>
        <FlatList
          data={meetups}
          keyExtractor={meetup => String(meetup.meetup_id)}
          renderItem={({ item: meetup }) => (
            <Meetup
              data={meetup.meetup}
              onButtonClick={() => {}}
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
