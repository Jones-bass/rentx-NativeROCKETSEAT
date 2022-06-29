import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';


export function Confirmation(){
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro Alugado!</Title>

        <Message>
          Agora você precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar seu automovel {'\n'}
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}