import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import styles from './styles';
import Buttons from '../../components/Buttons';
import { colors } from '../../styles';

const Barber = ({ navigation }) => {
  const Products = [
    {
      id: 1,
      name: 'Roberto Almeida',
      email: 'ra@gmail.com',
      phone: '(21)99858-2222',
      password: '123123',
      payment: 'weekly',
    },
    {
      id: 2,
      name: 'Jonas Rodrigues',
      email: 'jr@gmail.com',
      phone: '(21)99858-2222',
      password: '123123',
      payment: 'monthly',
    },
    {
      id: 3,
      name: 'Mateus Oliveira',
      email: 'mo@gmail.com',
      phone: '(21)99858-2222',
      password: '123123',
      payment: 'hairCut',
    },
  ];

  // hooks
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('NewBarber', { readOnly: true, item })
        }
      >
        <Text style={styles.text}>{item.name}</Text>
        <Icon
          name="trash"
          type="font-awesome"
          color="#517fa4"
          size={20}
          onPress={() => setModalVisible(true)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={Products}
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

export default Barber;
