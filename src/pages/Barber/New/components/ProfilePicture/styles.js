import { StyleSheet } from 'react-native';
import { colors } from '../../../../../styles';
import { hpd } from '../../../../../helpers/scalling';

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  text: {
    marginLeft: 20,
  },
  icon: {
    color: colors.black,
  },
  btn: {
    height: hpd(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default styles;
