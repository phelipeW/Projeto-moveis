import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 10,
  baseMargin: 30,
  paddingAbsolute: 20,
  marginAbsolute: 20,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  marginTop: Platform.OS === 'ios' ? 34 : StatusBar.currentHeight + 10,
};
