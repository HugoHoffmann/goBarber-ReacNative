import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image sourse={logo}/>
        <Form>
          <FormInput 
            icon="mail-outline" 
            keyboardType="email-address"  
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
          />
          <FormInput 
            icon="lock-outline" 
            secureTextEntry  
            placeholder="Digite sua senha"
          />
          <SubmitButton onPress={()=>{}} >
            Acessar conta
          </SubmitButton>
        </Form>
        <SignLink onPress={ ()=> navigation.navigate('SignUp')} >
          <SignLinkText>
            Criar conta
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
