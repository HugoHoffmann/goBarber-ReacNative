import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

import Background from '~/components/Background';


export default function Profile() {
  return (
    <Background>
        <Container>
            <Title>
                Agendamentos
            </Title>
        </Container>
    </Background>
  );
}

Profile.navigationOptions = {
    tabBarLabel: 'Meu Perfil',
    tabBarIcon: ({ tintColor }) => <Icon name="person" size={20} color={tintColor} />
}