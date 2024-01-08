import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";
import { CarDTO } from "../../dtos/CarDTO";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { Load } from "../../components/Load";
import Logo from "../../assets/logo.svg";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }
  
  useEffect(() => {
    async function fetCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading &&
            <TotalCars>Total de {cars.length} Carros</TotalCars>
          }
        </HeaderContent>
      </Header>

      {loading ? <Load /> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Car data={item} onPress={() => handleCarDetails(item)} />
          }
        />
      }
    </Container>
  );
}
