import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.basePadding * 2,
    backgroundColor: 'rgba(190, 190, 190, 0.9)',

    borderWidth: 1,
    borderRadius: 2,
    paddingVertical: metrics.basePadding / 2,
    marginBottom: metrics.baseMargin / 3,
  },
  line: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
