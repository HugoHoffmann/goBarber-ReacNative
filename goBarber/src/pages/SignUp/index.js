import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handbeSubmit(){
    a = 1;
  }
  return (
    <Background>
      <Container>
        <Image sourse={logo}/>
        <Form>
          <FormInput 
            icon="person-outline" 
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus() }
          />
          <FormInput 
            icon="mail-outline" 
            keyboardType="email-address"  
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus() }
            
          />
          <FormInput 
            icon="lock-outline" 
            secureTextEntry  
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handlSubmit}
          />
          <SubmitButton onPress={handlSubmit} >
            Acessar conta
          </SubmitButton>
        </Form>
        <SignLink onPress={ ()=> navigation.navigate('SignIn')} >
          <SignLinkText>
            Acessar conta
          </SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
