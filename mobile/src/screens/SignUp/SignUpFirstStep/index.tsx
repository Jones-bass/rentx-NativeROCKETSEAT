import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Alert, Keyboard, Platform, ScrollView, TouchableWithoutFeedback, View } from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { Input } from '../../../components/Input';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';

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


export function SignUpFirstStep() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCNH] = useState('');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const navigation = useNavigation();

   async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        cnh: Yup.string().required('CNH é obrigatório'),

        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),

        name: Yup.string().required('Nome é obrigatório'),
      });

      const data = { name, email, cnh };
      await schema.validate(data);

      navigation.navigate('SignUpSecondStep', { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer o cadastro, verifique o preenchimento dos campos',
        );
      }
    }
  }

   useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [Keyboard]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Container behavior={Platform.OS === 'ios' ? 'position' : undefined} style={{ flex: 1 }} enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Header>
              <NavBarContainer>
                <BackButton/>
                <Steps>
                  <Bullet active />
                </Steps>
              </NavBarContainer>
              {!isKeyboardVisible ? (
                <>
                  <Title>Crie sua{'\n'}conta</Title>
                  <Description>
                    Faça seu cadastro de{'\n'}
                    forma rápida e fácil.
                  </Description>
                </>
              ) : null}
            </Header>

            <Form>
              <Subtitle>1. Dados</Subtitle>

              <Input
                iconName="user"
                autoCapitalize="words"
                autoCorrect
                onChangeText={setName}
                placeholder="Nome"
                returnKeyType="next"
              />

              <InputDivisor />

              <Input
                iconName="mail"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={setEmail}
                placeholder="E-mail"
                returnKeyType="next"
              />

              <InputDivisor />

              <Input 
                iconName="credit-card" 
                keyboardType="numeric" 
                onChangeText={setCNH} 
                placeholder="CNH" 
                />
            </Form>

            <Footer>
              <Button title="Próximo" onPress={handleNextStep} 
              />
            </Footer>
          </View>
        </TouchableWithoutFeedback>
      </Container>
    </ScrollView>
  );
}
