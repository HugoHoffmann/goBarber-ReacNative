import React from 'react';
import { View, Text } from 'react-native';

import Input from '~/components/Input';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>Login</Text>
      <Input icon="call" />
    </Background>
  );
}
