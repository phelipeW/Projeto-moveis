import React, { useEffect } from 'react';

import {
  View,
  ImageBackground,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../../../public/assets/images/barber-background.jpg';
import { Creators as ScheduleActions } from '../../store/ducks/schedule';
import styles from './styles';
import { colors } from '../../styles';

export default function Schedule({ navigation }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.schedule);

  useEffect(() => {
    dispatch(ScheduleActions.getScheduleRequest());
  }, []);

  const renderSchedule = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('NewSchedule', { readOnly: true, item })
        }
        key={item?.id}
      >
        <View style={styles.line}>
          <Text style={styles.label}>Inicio: </Text>
          <Text>{item?.start_time}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Fim: </Text>
          <Text>{item?.end_time}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Barbeiro: </Text>
          <Text>{item?.barber?.name}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Serviço: </Text>
          <Text>{item?.service?.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground style={{ flex: 1 }} source={Background}>
      {data?.length ? (
        <FlatList
          data={data}
          renderItem={renderSchedule}
          keyExtractor={(item) => String(item.id)}
        />
      ) : (
        <View style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              color: colors.gray,
            }}
          >
            Nenhum agendamento marcado
          </Text>
        </View>
      )}
    </ImageBackground>
  );
}
