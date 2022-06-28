import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import GasolineSVG from '../../assets/gasoline.svg';

import {
    Brand,
    CarImage,
    Container,
    Type,
    Details,
    Name,
    Period,
    Price,
    Rent,
    About,
} from './styles';


interface CarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    },
    thumbnail: string;
};

interface Props extends RectButtonProps {
    data: CarData;
}

export function Car({ data, ...rest }: Props) {

    return (
        <Container {...rest}>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>

                    <Type>
                        <GasolineSVG />
                    </Type>
                </About>
            </Details>

            <CarImage source={{
                uri: data.thumbnail}} />
        </Container>
    );
};

//  
