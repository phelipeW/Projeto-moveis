import React from 'react';

import { View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const date = new Date();

LocaleConfig.locales.br = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abrl',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar.',
    'Abr.',
    'Mai.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.',
  ],
  dayNames: [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
  ],
  dayNamesShort: ['Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.', 'Dom.'],
  today: date,
};
LocaleConfig.defaultLocale = 'br';

export default function Schedule() {
  return (
    <View>
      <Calendar
        minDate={date}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        monthFormat="MMMM ',' yyyy"
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        hideExtraDays
      />
    </View>
  );
}
