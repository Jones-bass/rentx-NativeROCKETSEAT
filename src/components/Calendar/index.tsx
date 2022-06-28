import React from 'react';
import { 
    Calendar as CustomCalendar,
    LocaleConfig,
} from 'react-native-calendars';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 
    'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Junh', 'Julh', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
}
LocaleConfig.defaultLocale = 'pt-br';



export function Calendar () {
    const theme = useTheme();
    return (
    <CustomCalendar    
        renderArrow={(direction) => 
            <Feather 
                size={24} 
                color={theme.colors.shape} 
                name={direction === 'left' ? 'chevron-left' : 'chevron-right'} 
            /> 
        }
        headerStyle={{
            backgroundColor: theme.colors.background_secondary,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.text_detail,
            paddingBottom: 10,
            marginBottom: 10
        }}
        theme={{
            textDayHeaderFontFamily: theme.fonts.primary_500,
            textDayHeaderFontSize: 10,
            textDayFontFamily: theme.fonts.primary_400,
            
            textMonthFontSize: 20,
            textMonthFontFamily: theme.fonts.secondary_600,
            monthTextColor: theme.colors.title,
            
            arrowStyle: {
                marginHorizontal: -15
            }
        }}

        firstDay={1}  
    />
        
    );
};
