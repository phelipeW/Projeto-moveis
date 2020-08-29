import React from 'react';
import { Text } from 'react-native';
import { Button } from 'galio-framework';
import styles from './styles';

// import { Container } from './styles';

const Buttons = (props) => {
  const { text, onPress, style } = props;
  return (
    <Button style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};

export default Buttons;