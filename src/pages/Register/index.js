import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Creators as LoginActions } from '../../store/ducks/login';
import Button from '../../components/Buttons';
import Background from '../../../public/assets/images/barber.jpg';
import Input from '../../components/Input';
import emailSvg from '../../../public/assets/images/Email.svg';
import passwordSvg from '../../../public/assets/images/Password.svg';
import styles from './styles';
// import { Container } from './styles';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const doLogin = (email, password) => {
    dispatch(LoginActions.loginRequest({ email, password }));
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={Background}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '70%' }}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              password_confirmation: '',
            }}
            onSubmit={() => {}}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email('Digite um e-mail válido')
                .required('Campo obrigatório'),
              password: yup.string().required('Campo obrigatório'),
            })}
          >
            {({ values, handleChange, errors, touched, setFieldTouched }) => (
              <>
                <Input
                  label="Email"
                  iconSvg={emailSvg}
                  keyboardType="email-address"
                  // setRefInput={setEmailRef}
                  // nextField={() => passwordRef.focus()}
                  // returnKeyType="next"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  msg={touched.email && errors.email ? errors.email : null}
                />
                <Input
                  label="Senha"
                  // setRefInput={setPasswordRef}
                  // nextField={() =>
                  //   buttonRef.props.onPress(() =>
                  //     doLogin(values.email, values.password),
                  //   )
                  // }
                  // returnKeyType="go"
                  iconSvg={passwordSvg}
                  secureTextEntry
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  msg={
                    touched.password && errors.password ? errors.password : null
                  }
                />
                <Input
                  label="Confirme a senha"
                  // setRefInput={setPasswordRef}
                  // nextField={() =>
                  //   buttonRef.props.onPress(() =>
                  //     doLogin(values.email, values.password),
                  //   )
                  // }
                  // returnKeyType="go"
                  iconSvg={passwordSvg}
                  secureTextEntry
                  value={values.password_confirmation}
                  onChangeText={handleChange('password_confirmation')}
                  onBlur={() => setFieldTouched('password_confirmation')}
                  msg={
                    touched.password_confirmation &&
                    errors.password_confirmation
                      ? errors.password_confirmation
                      : null
                  }
                />
                <Button
                  text="Registrar"
                  // disabled={loginData.loading}
                  // loading={loginData.loading}
                  // onPress={() => props.navigation.navigate("Tab")}
                  onPress={() => doLogin(values.email, values.password)}
                  style={{ alignSelf: 'center' }}
                />
              </>
            )}
          </Formik>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
