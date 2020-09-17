import Constants from 'expo-constants';
import { showMessage } from 'react-native-flash-message';
import { colors } from '../styles';

const { manifest } = Constants;

export const getLocalIP = () => {
  return manifest.debuggerHost.split(':')[0];
};

export const parseError = (error) => {
  const message = error?.response?.data?.message;
  if (typeof message === 'object') {
    error?.response?.data?.message?.forEach((e) => {
      showMessage({
        message: e,
        type: 'default',
        backgroundColor: colors.tomato,
        color: colors.white,
      });
    });
  } else {
    showMessage({
      message,
      type: 'default',
      backgroundColor: colors.tomato,
      color: colors.white,
    });
  }
};
