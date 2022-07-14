import React, { useState } from 'react';
import * as Yup from 'yup';

import { Alert, Keyboard, KeyboardAvoidingView, Platform, StatusBar, TouchableWithoutFeedback, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { Container, Description, Footer, Form, Header, Title } from './styles';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const theme = useTheme();
  const { navigate } = useNavigation<any>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const { signIn } = useAuth();

  function handleSignUp() {
    navigate('SignUpFirstStep');
  }

  async function handleSignIn() { //fazer login
    try {
      const schema = Yup.object().shape({
      password: Yup.string().required('Senha é obrigatória'),
      email: Yup.string().email('Digite um email válido').required('E-mail é obrigatório.'),
    });
   
      await schema.validate({ email, password });
      Alert.alert('Sucesso ✅', 'Login realizado com sucesso');

      signIn({ email, password});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa 🚫', error.message);
      } else {
        Alert.alert('Erro na autenticação', 'Tente novamente');
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
    <Container>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor={theme.colors.background_primary} 
        translucent />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header isKeyboardVisible={isKeyboardVisible}>
            {!isKeyboardVisible ? (
              <Title>
                Estamos{'\n'}
                quase lá.
              </Title>
            ) : (
              <BackButton style={{ marginBottom: RFValue(40) }} onPress={Keyboard.dismiss} />
            )}
            <Description>
              Faça seu login para começar{'\n'}
              uma experiência incrível.
            </Description>
          </Header>
          <Form>
           <Input  
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            iconName="mail"
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="E-mail"
            value={email}
           />
            <View style={{ height: RFValue(8) }} />

            <PasswordInput
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
          </Form>

          <Footer>
            <Button
              title='Login'
              onPress={handleSignIn}
              enabled={true}
              loading={false}
            />

            <Button
              title='Criar Conta'
              color={theme.colors.background_secondary}
              light
              onPress={handleSignUp}
              enabled={true}
              loading={false}
              />
          </Footer>
        </View>
      </TouchableWithoutFeedback>
    </Container>
    </KeyboardAvoidingView>
  );
}
