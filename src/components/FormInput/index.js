/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

import { TextInput, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';

/** Components */
import InputMessage from '../InputMessage';

import styles from './styles';
import { colors, metrics } from '../../styles';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  componentDidMount() {}

  handleFocus() {
    const { onBlur } = this.props;
    if (onBlur) {
      const { focused } = this.state;

      this.setState(
        {
          focused: !focused,
        },
        () => {
          focused ? onBlur() : null;
        },
      );
    }
  }

  render() {
    const {
      mask,
      icon,
      ricon,
      iconSvg,
      placeholder,
      keyboardType,
      secureTextEntry,
      value,
      onChangeText,
      msg,
      options,
      autoCapitalize,
      label,
      style,
      textStyle,
      labelStyle,
      disabled,
      returnKeyType,
      setRefInput,
      nextField,
      blurSubmit,
      unit,
    } = this.props;

    const { focused } = this.state;
    const Svg = iconSvg;

    return (
      <>
        <View style={{ marginTop: metrics.baseMargin }}>
          {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
          <View
            style={[
              styles.inputContainer,
              style || null,
              focused ? { borderColor: '#FDB913' } : null,
            ]}
          >
            {!mask && (
              <TextInput
                blurOnSubmit={blurSubmit === undefined}
                returnKeyType={returnKeyType}
                editable={!disabled}
                disabled={disabled || false}
                style={[styles.input, textStyle || null]}
                autoCapitalize={autoCapitalize || 'none'}
                autoCorrect={false}
                ref={(input) => {
                  if (setRefInput) setRefInput(input);
                }}
                onSubmitEditing={() => {
                  if (nextField) nextField();
                }}
                placeholder={placeholder}
                underlineColorAndroid="rgba(0, 0, 0, 0)"
                placeholderTextColor="rgba(255,255,255,0.6)"
                onChangeText={onChangeText}
                value={value}
                onBlur={() => this.handleFocus()}
                onFocus={() => this.handleFocus()}
                keyboardType={keyboardType || 'default'}
                secureTextEntry={!!secureTextEntry}
              />
            )}
            {mask && (
              <TextInputMask
                returnKeyType={returnKeyType}
                blurOnSubmit={blurSubmit === undefined}
                editable={!disabled}
                disabled={disabled || false}
                type={mask}
                options={options}
                refInput={(input) => {
                  if (setRefInput) setRefInput(input);
                }}
                onSubmitEditing={() => {
                  if (nextField) nextField();
                }}
                style={[styles.input, textStyle || null]}
                autoCapitalize={autoCapitalize || 'none'}
                autoCorrect={false}
                placeholder={placeholder}
                underlineColorAndroid="rgba(0, 0, 0, 0)"
                placeholderTextColor="rgba(255,255,255,0.6)"
                onChangeText={onChangeText}
                value={value}
                onBlur={() => this.handleFocus()}
                onFocus={() => this.handleFocus()}
                keyboardType={keyboardType || 'default'}
                secureTextEntry={!!secureTextEntry}
              />
            )}
            {unit && (
              <Text
                style={{
                  marginRight: 10,
                  marginLeft: 5,
                  color: colors.black,

                  fontWeight: 'bold',
                }}
              >
                {unit}
              </Text>
            )}
            {icon && (
              <MaterialCommunityIcons name={icon} size={22} color="#FDB913" />
            )}
            {ricon && ricon}
            {iconSvg && <Svg width="20" height="20" fill={colors.secundary} />}
          </View>
          {msg && <InputMessage msg={msg} />}
        </View>
      </>
    );
  }
}
