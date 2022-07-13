import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback, View } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';

import {
  Container,
  Description,
  Footer,
  Form,
  Header,
  InputDivisor,
  NavBarContainer,
  Steps,
  Subtitle,
  Title,
} from './styles';

interface Params {
  user: {
    name: string;
    email: string;
    cnh: string;
  };
}

export function SignUpSecondStep() {
  const route = useRoute();
  const { user } = route.params as Params;
  const theme = useTheme();

  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function hadleRegister() {
    if (!password || !passwordConfirm) {
      Alert.alert('Atenção❗', 'Preencha todos os campos');
    }

    if (password !== passwordConfirm) {
      Alert.alert('Erro ❌', 'As senhas não são iguais');
    }
    navigation.navigate('Confirmation', {
      nextScreenRoute: 'SignIn',
      title: 'Conta Criada!',
      message: `Agora só fazer login\ne aproveitar`,
    });
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'position' : undefined} style={{ flex: 1 }} enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Header>
            <NavBarContainer>
              <BackButton />
              <Steps>
                <Bullet active />
              </Steps>
            </NavBarContainer>

            <Title>Crie sua{'\n'}conta</Title>
            <Description>
              Faça seu cadastro de{'\n'}
              forma rápida e fácil.
            </Description>
          </Header>

          <Form>
            <Subtitle>2. Senha</Subtitle>

            <PasswordInput
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              iconName="lock"
              onChangeText={setPassword}
              placeholder="Senha"
              value={password}
            />

            <InputDivisor />

            <PasswordInput
              autoCapitalize="none"
              autoCorrect={false}
              autoFocus
              iconName="lock"
              onChangeText={setPasswordConfirm}
              placeholder="Repetir senha"
              value={passwordConfirm}
            />
          </Form>

          <Footer>
            <Button
              color={theme.colors.success}
              title="Cadastrar"
              onPress={hadleRegister} />
          </Footer>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
}
