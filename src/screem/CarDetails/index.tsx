import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
    Container,
    Header,
    CarImages
} from './styles';

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}} />
                <CarImages>
                <ImageSlider imagesUrl={['https://th.bing.com/th/id/R.d8ca7b070e5cf45c252309e8bc045327?rik=Cb1Tblaqu4JStw&riu=http%3a%2f%2fwww.pngpix.com%2fwp-content%2fuploads%2f2016%2f02%2fYellow-Audi-car-PNG-Image.png&ehk=AYN%2fTnjKy1TRnvlsyKGA1yxf9UfHRUS7wvn9Jz%2fa2tE%3d&risl=&pid=ImgRaw&r=0.png']}/>
                </CarImages>
            </Header>
        </Container>
    );
};

//  
