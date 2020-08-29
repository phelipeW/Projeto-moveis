import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { colors } from '../../styles';

import styles from './styles';

const Input = (props) => {
  const {
    value,
    onChange,
    placeholder,
    style,
    keyboardType,
    inactive,
    label,
  } = props;
  const [focus, setFocus] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={
          focus
            ? [styles.container, { borderColor: colors.secundary }, style]
            : [styles.container, style]
        }
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        keyboardType={keyboardType}
        editable={!inactive}
      />
    </View>
  );
};

export default Input;
