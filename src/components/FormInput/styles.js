import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

import { hpd } from '../../helpers/scalling';

const styles = StyleSheet.create({
  inputContainer: {
    // marginTop: metrics.baseMargin,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
    alignItems: 'center',
    paddingVertical: hpd(1),
  },
  input: {
    color: colors.white,
    flex: 1,
  },
  label: {
    color: colors.gray,
    marginBottom: metrics.basePadding / 2,
  },
});

export default styles;
