import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Banner,
  Title,
  Details,
  DateView,
  DateText,
  Address,
  AddressText,
  Organizer,
  OrganizerText,
  MeetupButton,
} from './styles';

export default function Meetup({ data, subscription, onButtonClick }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container>
      <Banner source={{ uri: data.banner.url }} />
      <Title>{data.title}</Title>
      <Details>
        <DateView>
          <Icon name="event" size={14} color="#999" />
          <DateText>{dateParsed}</DateText>
        </DateView>
        <Address>
          <Icon name="place" size={14} color="#999" />
          <AddressText>{data.location}</AddressText>
        </Address>
        <Organizer>
          <Icon name="person" size={14} color="#999" />
          <OrganizerText>Organizador: {data.user.name}</OrganizerText>
        </Organizer>
      </Details>
      <MeetupButton altColor={subscription} onPress={onButtonClick}>
        {subscription ? 'Cancelar inscrição' : 'Realizar inscrição'}
      </MeetupButton>
    </Container>
  );
}
