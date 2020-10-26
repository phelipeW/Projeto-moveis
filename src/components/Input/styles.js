import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: colors.light,
    paddingHorizontal: 10,
    width: '100%',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  label: {
    color: colors.black,
    fontSize: 16,
  },
});

export default styles;
