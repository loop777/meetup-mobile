import React, { useEffect, useState, useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity, Alert } from 'react-native';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import api from '~/services/api';

import { Container, DateHeader, DateText } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          date,
          page: 1,
        },
      });

      setMeetups(response.data);
    }

    loadMeetups();
  }, [date]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  async function loadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    const response = await api.get('meetups', {
      params: {
        date,
        page: nextPage,
      },
    });

    setMeetups([...meetups, ...response.data]);
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  async function handleSubscription(id) {
    try {
      await api.post(`subscribe/${id}`);
    } catch (err) {
      Alert.alert(
        'Falha na inscrição',
        'Não foi possível realizar sua inscrição neste meetup.'
      );
    }
  }

  return (
    <Background>
      <Container>
        <DateHeader>
          <TouchableOpacity onPress={handlePrevDay}>
            <Icon name="chevron-left" size={30} color="#fff" />
          </TouchableOpacity>
          <DateText>{dateFormatted}</DateText>
          <TouchableOpacity onPress={handleNextDay}>
            <Icon name="chevron-right" size={30} color="#fff" />
          </TouchableOpacity>
        </DateHeader>

        <FlatList
          data={meetups}
          keyExtractor={meetup => String(meetup)}
          renderItem={({ item: meetup }) => (
            <Meetup
              data={meetup}
              onButtonClick={() => handleSubscription(meetup.id)}
            />
          )}
          onEndReached={loadMore}
        />
      </Container>
    </Background>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="format-list-bulleted" size={20} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon,
};
