import Constants from 'expo-constants';

const { manifest } = Constants;

export const getLocalIP = () => {
  return manifest.debuggerHost.split(':')[0];
};
