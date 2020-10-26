import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding * 2,
    backgroundColor: 'rgba(190, 190, 190, 0.9)',
    borderTopWidth: 0,
    borderWidth: 1,
    borderRadius: 2,
    padding: 15,
  },
  description: {
    fontSize: 16,
    fontWeight: '700',
  },
  price: {
    fontSize: 16,
    marginRight: 15,
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
  collapseHead: {
    paddingHorizontal: metrics.basePadding * 2,
    backgroundColor: 'rgba(190, 190, 190, 0.9)',
    height: 30,
    borderWidth: 1,
    borderRadius: 2,
    alignItems: 'center',
  },
  collapseTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default styles;
