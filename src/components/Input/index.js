import React, { useState, Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { colors } from '../../styles';
import InputMessage from '../InputMessage';
import styles from './styles';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  render() {
    const {
      value,
      onChangeText,
      placeholder,
      style,
      keyboardType,
      inactive,
      label,
      secureTextEntry,
      onChange,
      msg,
      ...rest
    } = this.props;
    const { focused } = this.state;
    return (
      <View style={[style, { width: '80%', marginBottom: 10 }]}>
        <Text style={styles.label}>{label}</Text>
        <View>
          <TextInput
            style={
              focused
                ? [styles.container, { borderColor: colors.secundary }]
                : [styles.container]
            }
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            keyboardType={keyboardType}
            editable={!inactive}
            secureTextEntry={secureTextEntry}
            onChange={onChange}
            {...rest}
          />
          {/* {iconSvg && <Svg width="20" height="20" fill={colors.secundary} />} */}
          {msg && <InputMessage msg={msg} />}
        </View>
      </View>
    );
  }
}
