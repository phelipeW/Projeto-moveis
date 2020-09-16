import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Creators as ProductAction } from '../../store/ducks/product';
import styles from './styles';
import Buttons from '../../components/Buttons';
import { colors } from '../../styles';

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const Products = [
    {
      id: 1,
      description: 'Creme de barbear',
      costPrice: '10',
      sellPrice: '12',
    },
    {
      id: 2,
      description: 'Gel Cola',
      costPrice: '5',
      sellPrice: '10',
    },
    {
      id: 3,
      description: 'Corte Tesoura',
      sellPrice: '20',
    },
    {
      id: 4,
      description: 'Corte Maquina',
      sellPrice: '25',
    },
    {
      id: 5,
      description: 'Corte Tesoura + Maquina',
      sellPrice: '15',
    },
    {
      id: 6,
      description: 'Creme de barbear',
      costPrice: '10',
      sellPrice: '12',
    },
    {
      id: 7,
      description: 'Gel Cola',
      costPrice: '5',
      sellPrice: '10',
    },
    {
      id: 8,
      description: 'Corte Tesoura',
      sellPrice: '20',
    },
    {
      id: 9,
      description: 'Corte Maquina',
      sellPrice: '25',
    },
    {
      id: 10,
      description: 'Corte Tesoura + Maquina',
      sellPrice: '15',
    },
    {
      id: 11,
      description: 'Creme de barbear',
      costPrice: '10',
      sellPrice: '12',
    },
    {
      id: 12,
      description: 'Gel Cola',
      costPrice: '5',
      sellPrice: '10',
    },
    {
      id: 13,
      description: 'Corte Tesoura',
      sellPrice: '20',
    },
    {
      id: 14,
      description: 'Corte Maquina',
      sellPrice: '25',
    },
    {
      id: 15,
      description: 'Corte Tesoura + Maquina',
      sellPrice: '15',
    },
  ];
  // hooks
  const [modalVisible, setModalVisible] = useState(false);
  const { data, loading } = useSelector((state) => state.product);

  console.tron.log('data', data);

  useEffect(() => {
    dispatch(ProductAction.getProduct());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('NewProduct', { readOnly: true, item })
        }
      >
        <Text style={styles.text}>{item.description}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}> R$ {item.sellPrice}.00</Text>
          <Icon
            name="trash"
            type="font-awesome"
            color="#517fa4"
            size={20}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.modalContainer}>
        <Modal visible={modalVisible}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deseja excluir?</Text>
            <View style={styles.buttonContainer}>
              <Buttons
                style={{ width: '45%', backgroundColor: colors.tomato }}
                text="SIM"
              />
              <Buttons
                style={{ width: '45%', backgroundColor: colors.primary }}
                text="NÃO"
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Product;
