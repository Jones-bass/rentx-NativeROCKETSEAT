import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";

import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { CarDTO } from "../../dtos/CarDTO";
import { Load } from "../../components/Load";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const CarData = {
    brand: "Audi",
    name: "R$ 5 Coute",
    rent: {
      period: "Ao Dia",
      price: 120,
    },
    thumbnail:
      "https://th.bing.com/th/id/R.d8ca7b070e5cf45c252309e8bc045327?rik=Cb1Tblaqu4JStw&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f02%2fYellow-Audi-car-PNG-Image.png&ehk=AYN%2fTnjKy1TRnvlsyKGA1yxf9UfHRUS7wvn9Jz%2fa2tE%3d&risl=&pid=ImgRaw&r=0.png",
  };

  function handleCarDetails() {
    navigation.navigate("CarDetails");
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
          <TotalCars>Total de 12 Carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? <Load/> :
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={handleCarDetails} />
          )}
        />
      }

    </Container>
  );
}
