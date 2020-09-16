import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../../../components/Input';
import Button from '../../../components/Buttons';
import styles from './styles';
import { Creators as ProductActions } from '../../../store/ducks/product';

const NewProduct = ({ route }) => {
  const dispatch = useDispatch();
  // HOOKS
  const [description, setDescription] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const readOnly = route.params?.readOnly;
  const item = route.params?.item;
  return (
    <>
      {!readOnly ? (
        <View style={styles.container}>
          <Input
            value={description}
            label="Descrição"
            onChange={(value) => setDescription(value)}
            style={{ marginBottom: 15 }}
          />
          <Input
            value={costPrice}
            label="Preço de custo (opcional)"
            onChange={(value) => setCostPrice(value)}
            style={{ marginBottom: 15 }}
            keyboardType="numeric"
          />
          <Input
            value={sellPrice}
            label="Preço de venda"
            onChange={(value) => setSellPrice(value)}
            style={{ marginBottom: 15 }}
            keyboardType="numeric"
          />
          <Button text="Cadastrar" style={{ alignSelf: 'center' }} />
        </View>
      ) : (
        <View style={styles.container}>
          <Input
            value={item?.description}
            label="Descrição"
            style={{ marginBottom: 15 }}
          />
          <Input
            value={item?.costPrice}
            label="Preço de custo (opcional)"
            style={{ marginBottom: 15 }}
          />
          <Input
            value={item?.sellPrice}
            label="Preço de venda"
            style={{ marginBottom: 15 }}
          />
          <Button
            text="Salvar"
            style={{ alignSelf: 'center' }}
            // onPress={() => dispatch(ProductActions.postProduct())}
          />
        </View>
      )}
    </>
  );
};

export default NewProduct;
