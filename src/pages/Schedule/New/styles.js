import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';
import { hpd } from '../../../helpers/scalling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  formikContainer: {
    flex: 1,
    marginHorizontal: metrics.basePadding,
  },
  label: {
    color: colors.black,
    fontSize: 16,
  },
  profileImage: {
    height: hpd(15),
    width: hpd(15),
    borderRadius: metrics.baseRadius * 10,
  },
  profileImageContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: metrics.basePadding * 3,
  },
});

export default styles;
