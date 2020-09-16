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
    iconSvg,
    msg,
  } = props;
  const [focus, setFocus] = useState(false);
  const Svg = iconSvg;

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View>
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
        {/* {iconSvg && <Svg width="20" height="20" fill={colors.secundary} />} */}
      </View>
      {/* {msg && <InputMessage msg={msg} />} */}
    </View>
  );
};

export default Input;
