import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as LoginActions } from '../../store/ducks/login';
import Button from '../../components/Buttons';
import Background from '../../../public/assets/images/barber.jpg';
import Input from '../../components/Input';
import styles from './styles';
// import { Container } from './styles';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { success, loading } = useSelector((state) => state.login);

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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: '50%',
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input
            label="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            label="Senha"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            text="Entrar"
            disabled={loading}
            loading={loading}
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
      </View>
    </ImageBackground>
  );
};

export default Login;
