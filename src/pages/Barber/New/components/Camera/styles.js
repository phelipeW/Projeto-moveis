import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../../styles';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    flex: 1,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 50,
    padding: metrics.basePadding * 2,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  iconPadding: {
    padding: metrics.basePadding * 2,
  },
  iconPaddingx2: {
    padding: metrics.basePadding * 2,
  },
  closeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
  },
  img: {
    color: 'white',
  },
  null: {
    justifyContent: 'center',

    borderRadius: 50,
    padding: metrics.basePadding * 2,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 3,
    backgroundColor: colors.darker,
    padding: 20,
    position: 'absolute',
    bottom: 0,
  },
  cameraContainer: {
    flex: 1,
  },
});

export default styles;
