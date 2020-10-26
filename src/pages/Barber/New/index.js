import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  View,
  Picker,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as BarberActions } from '../../../store/ducks/barber';
import FormInput from '../../../components/FormInput';
import Button from '../../../components/Buttons';
import styles from './styles';
import { colors } from '../../../styles';
import { CameraContext } from '../../../components/CameraProvider';
import DefaultUser from '../../../../public/assets/images/default-user.jpg';
import ProfilePicture from './components/ProfilePicture';
import CameraRender from './components/Camera';

const NewBarber = ({ route, navigation }) => {
  const readOnly = route.params?.readOnly;
  const item = route.params?.item;
  const profileRef = useRef();
  const dispatch = useDispatch();

  const [emailRef, setEmailRef] = useState('');
  const [phoneRef, setPhoneRef] = useState('');
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [passwordRef, setPasswordRef] = useState('');
  const { avatar, setAvatar } = useContext(CameraContext);

  const { addLoading, addSuccess } = useSelector((state) => state.barber);

  const doRegister = (values) => {
    if (readOnly) {
      dispatch(
        BarberActions.editBarberRequest({ id: item.id, barber: values }),
      );
    } else {
      dispatch(BarberActions.newBarberRequest(values));
    }
  };

  const renderAvatar = () => {
    if (avatar) {
      return <Image style={styles.profileImage} source={{ uri: avatar }} />;
    }
    if (photo) {
      return <Image style={styles.profileImage} source={{ uri: photo }} />;
    }
    return <Image source={DefaultUser} style={styles.profileImage} />;
  };

  useEffect(() => {
    if (addSuccess === true) {
      dispatch(BarberActions.newBarberReset());
      navigation.goBack();
    }
  }, [addSuccess]);

  return (
    <>
      {open ? (
        <CameraRender
          setPhoto={setPhoto}
          setOpen={setOpen}
          setAvatar={setAvatar}
        />
      ) : (
        <View style={styles.container}>
          <ProfilePicture profileRef={profileRef} setOpen={setOpen} />

          <Formik
            initialValues={
              readOnly
                ? {
                    name: item.name,
                    email: item.email,
                    phone: item.phone,
                    password: item.password,
                    payment: item.payment,
                  }
                : {
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    payment: 'weekly',
                  }
            }
            onSubmit={doRegister}
            validationSchema={yup.object().shape({
              name: yup.string().required('Campo obrigatório'),
              email: yup
                .string()
                .email('Digite um e-mail válido')
                .required('Campo obrigatório'),
              phone: yup.string().required('Campo obrigatório'),
              password: yup.string().required('Campo obrigatório'),
              payment: yup.string().required('Campo obrigatório'),
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
                    <TouchableOpacity
                      onPress={() => profileRef?.current?.open()}
                    >
                      <View style={styles.profileImageContainer}>
                        {renderAvatar()}
                      </View>
                    </TouchableOpacity>
                    <FormInput
                      label="Nome"
                      returnKeyType="next"
                      autoCapitalize="words"
                      nextField={() => emailRef.focus()}
                      placeholder=""
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={() => setFieldTouched('name')}
                      msg={touched.name && errors.name ? errors.name : null}
                      style={{ borderColor: colors.light }}
                      textStyle={{
                        color: colors.black,
                        fontWeight: 'bold',
                      }}
                    />

                    <FormInput
                      label="Email"
                      nextField={() => phoneRef.focus()}
                      setRefInput={setEmailRef}
                      returnKeyType="next"
                      placeholder=""
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={() => setFieldTouched('email')}
                      msg={touched.email && errors.email ? errors.email : null}
                      style={{ borderColor: colors.light }}
                      textStyle={{
                        color: colors.black,
                        fontWeight: 'bold',
                      }}
                    />
                    <FormInput
                      label="Telefone"
                      nextField={() => passwordRef.focus()}
                      mask="cel-phone"
                      setRefInput={setPhoneRef}
                      returnKeyType="next"
                      placeholder=""
                      value={values.phone}
                      onChangeText={handleChange('phone')}
                      onBlur={() => setFieldTouched('phone')}
                      msg={touched.phone && errors.phone ? errors.phone : null}
                      style={{ borderColor: colors.light }}
                      textStyle={{
                        color: colors.black,
                        fontWeight: 'bold',
                      }}
                      keyboardType="numeric"
                    />
                    {!readOnly && (
                      <FormInput
                        label="Senha"
                        setRefInput={setPasswordRef}
                        placeholder=""
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={() => setFieldTouched('password')}
                        secureTextEntry
                        msg={
                          touched.password && errors.password
                            ? errors.password
                            : null
                        }
                        style={{ borderColor: colors.light }}
                        textStyle={{
                          color: colors.black,
                          fontWeight: 'bold',
                        }}
                      />
                    )}
                    <View style={{ marginVertical: 15 }}>
                      <Text style={styles.label}>Tipo de pagamento</Text>
                      <Picker
                        selectedValue={values.payment}
                        style={{ height: 50, width: 150, borderBottomWidth: 1 }}
                        onValueChange={(itemValue) =>
                          setFieldValue('payment', itemValue)
                        }
                      >
                        <Picker.Item label="Semanal" value="weekly" />
                        <Picker.Item label="Mensal" value="monthly" />
                        <Picker.Item label="Por corte" value="haircut" />
                        <Picker.Item label="Porcentagem" value="percentage" />
                      </Picker>
                    </View>
                    {addLoading ? (
                      <Button style={{ alignSelf: 'center', marginTop: 30 }}>
                        <ActivityIndicator
                          color={colors.black}
                          style={{ alignSelf: 'center', margin: 0 }}
                        />
                      </Button>
                    ) : (
                      <Button
                        text={readOnly ? 'Salvar' : 'Cadastrar'}
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
      )}
    </>
  );
};

export default NewBarber;
