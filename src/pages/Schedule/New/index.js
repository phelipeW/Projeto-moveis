import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  View,
  Picker,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as BarberActions } from '../../../store/ducks/barber';
import { Creators as ProductActions } from '../../../store/ducks/product';
import { Creators as ScheduleActions } from '../../../store/ducks/schedule';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Buttons';
import styles from './styles';
import { colors } from '../../../styles';
import LongText from '../../../components/LongText';

const NewSchedule = ({ route, navigation }) => {
  const readOnly = route?.params?.readOnly;
  const item = route?.params?.item;
  const dispatch = useDispatch();

  const [endTime, setEndTimeRef] = useState('');

  const { success, loading } = useSelector((state) => state.schedule);

  const { data: barberData } = useSelector((state) => state.barber);
  const { serviceData } = useSelector((state) => state.product);

  useEffect(() => {
    if (success === true) {
      dispatch(ScheduleActions.postScheduleReset());
      navigation.goBack();
    }
  }, [success]);

  useEffect(() => {
    dispatch(BarberActions.getBarberRequest());
    dispatch(ProductActions.getService());
  }, []);

  const doRegister = (values) => {
    if (readOnly) {
      dispatch(
        ScheduleActions.editScheduleRequest({ id: item.id, schedule: values }),
      );
    } else {
      dispatch(ScheduleActions.postScheduleRequest(values));
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={
          readOnly
            ? {
                start_time: item?.start_time,
                end_time: item?.end_time,
                barber_id: item?.barber?.id,
                user_id: 1,
                service_id: item?.service?.id,
              }
            : {
                start_time: '',
                end_time: '',
                barber_id: '',
                user_id: 1,
                service_id: '',
              }
        }
        onSubmit={doRegister}
        validationSchema={yup.object().shape({
          start_time: yup.string().required('Campo obrigatório'),
          end_time: yup.string().required('Campo obrigatório'),
          barber_id: yup.string().required('Campo obrigatório'),
          service_id: yup.string().required('Campo obrigatório'),
        })}
      >
        {({
          values,
          handleChange,
          errors,
          touched,
          setFieldTouched,
          setFieldValue,
          submitForm,
        }) => (
          <>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <ScrollView style={styles.formikContainer}>
                <FormInput
                  label="Hora de início"
                  returnKeyType="next"
                  autoCapitalize="words"
                  nextField={() => endTime.focus()}
                  placeholder=""
                  mask="custom"
                  options={{ mask: '99:99' }}
                  value={values.start_time}
                  onChangeText={handleChange('start_time')}
                  onBlur={() => setFieldTouched('start_time')}
                  msg={
                    touched?.start_time && errors?.start_time
                      ? errors.start_time
                      : null
                  }
                  style={{ borderColor: colors.light }}
                  textStyle={{
                    color: colors.black,
                    fontWeight: 'bold',
                  }}
                />

                <FormInput
                  label="Hora de termino"
                  setRefInput={setEndTimeRef}
                  mask="custom"
                  options={{ mask: '99:99' }}
                  placeholder=""
                  value={values.end_time}
                  onChangeText={handleChange('end_time')}
                  onBlur={() => setFieldTouched('end_time')}
                  msg={
                    touched?.end_time && errors?.end_time
                      ? errors.end_time
                      : null
                  }
                  style={{ borderColor: colors.light }}
                  textStyle={{
                    color: colors.black,
                    fontWeight: 'bold',
                  }}
                />
                <View style={{ marginVertical: 15 }}>
                  <Text style={styles.label}>Barbeiro</Text>
                  <Picker
                    selectedValue={values.barber_id}
                    style={{ height: 50, width: 150, borderBottomWidth: 1 }}
                    onValueChange={(itemValue) =>
                      setFieldValue('barber_id', itemValue)
                    }
                  >
                    {barberData.map((barber) => (
                      <Picker.Item label={barber.name} value={barber.id} />
                    ))}
                  </Picker>
                </View>

                <View style={{ marginVertical: 15 }}>
                  <Text style={styles.label}>Serviço</Text>
                  <Picker
                    selectedValue={values.service_id}
                    style={{ height: 50, width: 150, borderBottomWidth: 1 }}
                    onValueChange={(itemValue) =>
                      setFieldValue('service_id', itemValue)
                    }
                  >
                    {serviceData.map((service) => (
                      <Picker.Item
                        label={service.description}
                        value={service.id}
                      />
                    ))}
                  </Picker>
                </View>

                {readOnly && (
                  <LongText
                    label="Lembrete"
                    content="O serviço possui uma margem de atraso de 10 minutos devendo
                      assim possivelmente finalizar antes do fim esperado."
                  />
                )}
                {loading ? (
                  <Button style={{ alignSelf: 'center', marginTop: 30 }}>
                    <ActivityIndicator
                      color={colors.black}
                      style={{ alignSelf: 'center', margin: 0 }}
                    />
                  </Button>
                ) : (
                  <Button
                    text={readOnly ? 'Editar' : 'Cadastrar'}
                    style={{ alignSelf: 'center', marginTop: 30 }}
                    onPress={submitForm}
                  />
                )}
              </ScrollView>
            </TouchableWithoutFeedback>
          </>
        )}
      </Formik>
    </View>
  );
};

export default NewSchedule;
