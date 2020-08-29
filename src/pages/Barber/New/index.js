import React, { useState } from 'react';
import { View, Picker, Text } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Buttons';
import styles from './styles';

const NewBarber = ({ route }) => {
  // HOOKS
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [payment, setPayment] = useState('');

  const readOnly = route.params?.readOnly;
  const item = route.params?.item;

  return (
    <>
      {!readOnly ? (
        <View style={styles.container}>
          <Input
            value={name}
            label="Nome"
            onChange={(value) => setName(value)}
            style={{ marginBottom: 15 }}
          />

          <Input
            value={email}
            label="Email"
            onChange={(value) => setEmail(value)}
            style={{ marginBottom: 15 }}
          />
          <Input
            value={phone}
            label="Telefone"
            onChange={(value) => setPhone(value)}
            style={{ marginBottom: 15 }}
            keyboardType="numeric"
          />
          <Input
            value={password}
            label="Senha"
            onChange={(value) => setPassword(value)}
            style={{ marginBottom: 15 }}
          />
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.label}>Tipo de pagamento</Text>
            <Picker
              selectedValue={payment}
              style={{ height: 50, width: 150, borderBottomWidth: 1 }}
              onValueChange={(itemValue) => setPayment(itemValue)}
            >
              <Picker.Item label="Semanal" value="weekly" />
              <Picker.Item label="Mensal" value="monthly" />
              <Picker.Item label="Por corte" value="hairCut" />
            </Picker>
          </View>
          <Button text="Cadastrar" style={{ alignSelf: 'center' }} />
        </View>
      ) : (
        <View style={styles.container}>
          <Input
            value={item.name}
            label="Nome"
            onChange={(value) => setName(value)}
            style={{ marginBottom: 15 }}
          />

          <Input
            value={item.email}
            label="Email"
            onChange={(value) => setEmail(value)}
            style={{ marginBottom: 15 }}
          />
          <Input
            value={item.phone}
            label="Telefone"
            onChange={(value) => setPhone(value)}
            style={{ marginBottom: 15 }}
            keyboardType="numeric"
          />
          <Input
            value={item.password}
            label="Senha"
            onChange={(value) => setPassword(value)}
            style={{ marginBottom: 15 }}
          />
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.label}>Tipo de pagamento</Text>
            <Picker
              selectedValue={item.payment}
              style={{ height: 50, width: 150, borderBottomWidth: 1 }}
              onValueChange={(itemValue) => setPayment(itemValue)}
            >
              <Picker.Item label="Semanal" value="weekly" />
              <Picker.Item label="Mensal" value="monthly" />
              <Picker.Item label="Por corte" value="hairCut" />
            </Picker>
          </View>
          <Button text="Cadastrar" style={{ alignSelf: 'center' }} />
        </View>
      )}
    </>
  );
};

export default NewBarber;
