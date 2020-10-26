import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding * 2,
    backgroundColor: 'rgba(190, 190, 190, 0.8)',
    borderWidth: 1,
    borderRadius: 2,
    padding: 15,
    margin: 15,
  },
  text: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.regular,
  },
  modalView: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    height: 160,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
  },
});

export default styles;
