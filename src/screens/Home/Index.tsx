import React, { useEffect, useState } from "react";
import { BackHandler, StatusBar, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { Ionicons } from '@expo/vector-icons'

import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { PanGestureHandler, RectButton } from "react-native-gesture-handler";

import { CarDTO } from "../../dtos/CarDTO";
import { useTheme } from "styled-components";

import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

import Animated,
{
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { Load } from "../../components/Load";

const MyCarButtonAnimated = Animated.createAnimatedComponent(RectButton);

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) { // começa a arrastar
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) { //esta arrastando
      positionX.value = event.translationX + ctx.positionX;
      positionY.value = event.translationY + ctx.positionY;
    },
    onEnd() {// quando ele solta
      positionX.value = withSpring(0);
      // positionY.value = 0;
    }
  })
  const handleMyCarButtonAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: positionX.value
        },
        {
          translateY: positionY.value
        }
      ]
    }
  })

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars');
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

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
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
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
      >
        <Animated.View
          style={[handleMyCarButtonAnimation,
            {
              position: 'absolute',
              bottom: RFValue(13),
              right: RFValue(22),
            }]}
        >
          <MyCarButtonAnimated
            onPress={handleOpenMyCars}
            style={[styles.myCarButtonStyle, { backgroundColor: theme.colors.main }]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.background_secondary}
            />
          </MyCarButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  myCarButtonStyle: {
    width: RFValue(60),
    height: RFValue(60),
    borderRadius: RFValue(30),

    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    // bottom: RFValue(13),
    // right: RFValue(22),
  }
})