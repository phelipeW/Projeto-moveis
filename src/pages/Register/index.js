import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Creators as RegisterActions } from '../../store/ducks/register';
import Button from '../../components/Buttons';
import Background from '../../../public/assets/images/barber.jpg';
import Input from '../../components/Input';
import emailSvg from '../../../public/assets/images/Email.svg';
import passwordSvg from '../../../public/assets/images/Password.svg';
import styles from './styles';
// import { Container } from './styles';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const doRegister = (values) => {
    const { email, password, username } = values;
    dispatch(RegisterActions.registerRequest({ email, password, username }));
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={Background}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            height: 350,
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ width: '70%' }}>
            <Formik
              initialValues={{
                email: '',
                username: '',
                password: '',
                password_confirmation: '',
              }}
              onSubmit={doRegister}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .email('Digite um e-mail válido')
                  .required('Campo obrigatório'),
                password: yup.string().required('Campo obrigatório'),
                username: yup.string().required('Campo obrigatório'),
              })}
            >
              {({
                values,
                handleChange,
                errors,
                touched,
                setFieldTouched,
                submitForm,
              }) => (
                <>
                  <Input
                    label="Email"
                    keyboardType="email-address"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    msg={touched.email && errors.email ? errors.email : null}
                  />
                  <Input
                    label="Apelido"
                    value={values.username}
                    onChangeText={handleChange('username')}
                    onBlur={() => setFieldTouched('username')}
                    msg={
                      touched.username && errors.username
                        ? errors.username
                        : null
                    }
                  />
                  <Input
                    label="Senha"
                    iconSvg={passwordSvg}
                    secureTextEntry
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    msg={
                      touched.password && errors.password
                        ? errors.password
                        : null
                    }
                  />
                  <Input
                    label="Confirme a senha"
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
                    onPress={submitForm}
                    style={{ alignSelf: 'center' }}
                  />
                </>
              )}
            </Formik>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
