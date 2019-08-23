import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Banner = styled.Image`
  height: 150px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 18px;
`;

export const Details = styled.View`
  margin: 11px 0 14px 20px;
`;

export const DateView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 13px;
  color: #999;
  margin-left: 8px;
`;

export const Address = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddressText = styled.Text`
  font-size: 13px;
  color: #999;
  margin-left: 8px;
`;

export const Organizer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OrganizerText = styled.Text`
  font-size: 13px;
  color: #999;
  margin-left: 8px;
`;

export const MeetupButton = styled(Button)`
  background: ${props => (props.altColor ? '#D44059' : '#F94D6A')}
  margin: 0 20px 20px;
`;
