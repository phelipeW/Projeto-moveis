import React from 'react';
import { Text, ActivityIndicator, Image } from 'react-native';
import { Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
// import { Container } from './styles';

const Buttons = (props) => {
  const { text, onPress, style, children, loading, image, icon } = props;

  // const Icon = icon;
  return (
    <Button style={[styles.button, style]} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          {icon && <Icon name={icon} size={30} />}
          <Text style={styles.text}>{text}</Text>
          {children}
        </>
      )}
    </Button>
  );
};

export default Buttons;
