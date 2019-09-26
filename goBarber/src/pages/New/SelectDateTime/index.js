import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import DateInput from '~/components/DateInput';

import { Container, HourList, Hour, Title } from './styles';
import api from '~/services/api';

export default function SelectDateTime({navigation}) {
  const [date, setDate] = useState( new Date() );
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  function handleSelectHour(time){

  }

  useEffect( () => {
    async function loadAvailable(){
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        }
      });
      setHours(response.data);
    }
    loadAvailable();
  }, [date, provider.id])
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({item}) => (
            <Hour onPress={ () => handleSelectHour(item.value) } enabled={item.available}>
              <Title>{item.time}</Title>
               
            </Hour>
          ) }
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = () => ({
  title: 'selecione o horário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => { navigation.goBack() } } >
        <Icon name="chevron-left" size={20} color="#fff"/>
    </TouchableOpacity>
  ),
});