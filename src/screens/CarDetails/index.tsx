import React from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

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
import { CarDTO } from "../../dtos/CarDTO";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();

  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate('Scheduling')    
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={car.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>

        </Details>
        <Accessories>
          { car.accessories.map(accesory => (
            <Accessory
            key={accesory.type}
            name={accesory.name}
            icon={getAccessoryIcon(accesory.type)}
            />
          ))}
          
        </Accessories>

        <About>{car.about}</About>
      </Content>r

      <Footer>
        <Button title="Escolher período do aluguel!" onPress={handleConfirmRental}/>
      </Footer>

    </Container>
  );
}

//
