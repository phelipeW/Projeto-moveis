import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const LongText = (props) => {
  const { label, content } = props;
  return (
    <View style={styles.line}>
      <Text style={[styles.cel, styles.label]}>{label}</Text>
      <Text style={[styles.cel, styles.contet]}>{content}</Text>
    </View>
  );
};
export default LongText;
