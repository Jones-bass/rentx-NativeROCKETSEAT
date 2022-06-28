import React from "react";
import { useNavigation } from '@react-navigation/native';

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolinaSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Price,
  Rent,
  About,
  Accessories,
  Period,
  Footer
} from "./styles";
import { Button } from "../../components/Button";

export function CarDetails() {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('Scheduling')    
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://m.media-amazon.com/images/I/61Omh8nwEIL._AC_SL1305_.jpg",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>15 de junho</Period>
            <Price>R$ 580</Price>
          </Rent>

        </Details>
        <Accessories>
          <Accessory name="380km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="Force" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolinaSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 Pessoas" icon={peopleSvg} />
        </Accessories>

        <About>
          Este é um automovel desportivo. Surgiu do lendário touro de lide
          indulpado na praça Real Maestranza de Sevilla. é um belissimo carro
          para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel!" onPress={handleConfirmRental}/>
      </Footer>

    </Container>
  );
}

//
