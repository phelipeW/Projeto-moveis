import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: colors.light,
    paddingHorizontal: 10,
    width: '100%',
  },
  label: {
    color: colors.regular,
  },
});

export default styles;
