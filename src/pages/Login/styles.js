import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

import { hpd } from '../../helpers/scalling';

const styles = StyleSheet.create({
  logoContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {
    marginTop: 30,
    fontWeight: 'bold',
    color: colors.white,
  },
  inputLabel: {
    color: colors.gray,
    marginBottom: -25,
    marginTop: 20,
  },
  forgotPassword: {
    marginTop: 20,
    color: colors.white,
    textAlign: 'right',
  },
  background: {
    color: colors.white,
    backgroundColor: '#000',
    flex: 1,
  },
  containerSocialNetwork: {
    marginTop: 20,
  },
  containerSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  containerRegister: {
    marginTop: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    textAlign: 'center',
    color: colors.white,
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: metrics.baseMargin,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    alignItems: 'center',
    paddingVertical: hpd(1),
  },
  input: {
    marginLeft: metrics.baseMargin / 2,
    color: colors.white,
    flex: 1,
  },
  inputContainerLast: { marginBottom: hpd(3) },

  buttonsContainer: {
    justifyContent: 'space-between',
  },
  RegisterButtonText: {
    color: colors.black,
  },
  RegisterButtonUnderline: {
    color: colors.secundary,
    textDecorationLine: 'underline',
  },
});

export default styles;
