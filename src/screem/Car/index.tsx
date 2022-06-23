import React from 'react';
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

interface Props {
    data: CarData;
}

export function Car({ data }: Props) {

    return (
        <Container>
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
