import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as LoginActions } from '../../store/ducks/login';
import Button from '../../components/Buttons';
import Background from '../../../public/assets/images/barber.jpg';
import Input from '../../components/Input';
import styles from './styles';
// import { Container } from './styles';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('phelipe@gmail.com');
  const [password, setPassword] = useState('123456');

  const { success } = useSelector((state) => state.login);

  const doLogin = (email_login, password_login) => {
    dispatch(
      LoginActions.loginRequest({
        email: email_login,
        password: password_login,
      }),
    );
  };

  useEffect(() => {
    if (success) {
      navigation.navigate('Home');
    }
  }, [success]);

  return (
    <ImageBackground style={{ flex: 1 }} source={Background}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Input
          label="Email"
          keyboardType="email-address"
          // setRefInput={setEmailRef}
          // nextField={() => passwordRef.focus()}
          // returnKeyType="next"
          value={email}
          onChangeText={(text) => setEmail(text)}
          // onBlur={() => setFieldTouched('email')}
          // msg={touched.email && errors.email ? errors.email : null}
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

          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          // onBlur={() => setFieldTouched('password')}
          // msg={touched.password && errors.password ? errors.password : null}
        />
        <Button
          text="Entrar"
          // disabled={loginData.loading}
          // loading={loginData.loading}
          // onPress={() => props.navigation.navigate("Tab")}
          onPress={() => doLogin(email, password)}
        />

        <SafeAreaView>
          <TouchableOpacity
            style={styles.containerRegister}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.RegisterButtonText}>
              Não tem conta?{' '}
              <Text style={styles.RegisterButtonUnderline}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default Login;
