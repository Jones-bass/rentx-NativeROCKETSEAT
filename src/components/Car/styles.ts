import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(126)}px; 
    background-color: ${({ theme }) => theme.colors.background_secondary};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 24px;
    margin-top: 16px;
`;

export const Details = styled.View`
`;

export const Brand = styled.Text`
    font-size: ${RFValue(10)}px;    
    font-family: ${({ theme }) => theme.fonts.secondary_500}; 
    color: ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;
`;

export const Name = styled.Text`
    font-size: ${RFValue(15)}px;    
    font-family: ${({ theme }) => theme.fonts.secondary_500}; 
    color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 16px;
`;

export const Rent = styled.View`
    margin-right: 24px;
`;

export const Period = styled.Text`
    font-size: ${RFValue(10)}px;    
    font-family: ${({ theme }) => theme.fonts.secondary_500}; 
    color: ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;    
`;

export const Price = styled.Text`
    font-size: ${RFValue(15)}px;    
    font-family: ${({ theme }) => theme.fonts.secondary_500}; 
    color: ${({ theme }) => theme.colors.main};
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
    width: 167px;
    height: 85px;
`;
