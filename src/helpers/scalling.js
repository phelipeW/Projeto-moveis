import { PixelRatio, Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const wpd = (widthPercent) => {
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  );
};

export const hpd = (heightPercent) => {
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  );
};

export const fixText = (size = 5) => {
  return Platform.OS === 'ios' ? size : 0;
};
