import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-native-paper';
import { Creators as ProductAction } from '../../store/ducks/product';
import styles from './styles';
import Buttons from '../../components/Buttons';
import { colors } from '../../styles';

const Product = ({ navigation }) => {
  const dispatch = useDispatch();

  // hooks
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(ProductAction.getProduct());
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(ProductAction.getProduct());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Card>
        <Text style={styles.description}>{item.description}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}> R$ {item.sell}</Text>
          <Icon
            name="trash"
            type="font-awesome"
            color="#517fa4"
            size={20}
            onPress={() => {
              setModalVisible(true);
              setDeleteProduct(item.id);
            }}
          />
        </View>
      </Card>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator style={{ marginTop: 100 }} />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
      <View style={styles.modalContainer}>
        <Modal visible={modalVisible}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deseja excluir?</Text>
            <View style={styles.buttonContainer}>
              <Buttons
                style={{ width: '45%', backgroundColor: colors.tomato }}
                text="SIM"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  dispatch(
                    ProductAction.removeProductRequest({ id: deleteProduct }),
                  );
                }}
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
