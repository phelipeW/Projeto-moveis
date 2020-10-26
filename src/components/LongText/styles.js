import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  line: {
    paddingVertical: 3,
    backgroundColor: 'rgba(56,176,222,0.1)',
  },
  cel: { paddingLeft: 5, fontSize: 16 },
  label: {
    fontWeight: 'bold',
    flex: 1,
    paddingBottom: 6,
    fontSize: 18,
    color: colors.secundary,
  },
  content: { flex: 3 },
});

export default styles;
