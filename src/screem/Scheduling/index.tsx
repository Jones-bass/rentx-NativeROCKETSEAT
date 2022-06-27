import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';

import { 
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    Footer,
    Content,
    DateValue,
} from './styles';

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
};

export function Scheduling () {
    const theme = useTheme();

    
    return (
    <Container>
        <StatusBar 
            barStyle='light-content' 
            backgroundColor="transparent" 
            translucent
        />        
        <Header> 
            <BackButton 
                onPress={() => {}}
                color={theme.colors.shape}
            />  
            <Title>
                Escolha uma{'\n'}
                data de início e{'\n'}
                fim do aluguel{'\n'}
            </Title>
            
            <RentalPeriod>
                <DateInfo>
                    <DateTitle>DE</DateTitle>
                    <DateValue selected={false}>27/05/2022</DateValue>
                </DateInfo>

                <ArrowSvg />

                <DateInfo>
                    <DateTitle>ATÉ</DateTitle>
                    <DateValue selected={false}>27/06/2022</DateValue>
                </DateInfo>                
            </RentalPeriod>

        </Header>

        <Content>
        </Content>

        <Footer>
            <Button 
                title="Confirmar"/>
        </Footer>
        
    </Container>
    );
}