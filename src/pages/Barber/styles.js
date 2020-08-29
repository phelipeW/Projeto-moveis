import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding * 2,
    backgroundColor: colors.lightBlue,
    height: 50,
    borderWidth: 1,
    borderRadius: 2,
    borderTopWidth: 0,
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
    backgroundColor: 'white',
    borderRadius: 20,
    height: 150,
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
