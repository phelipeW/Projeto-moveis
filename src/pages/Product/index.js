import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import { Creators as ProductAction } from '../../store/ducks/product';
import styles from './styles';
import Buttons from '../../components/Buttons';
import { colors } from '../../styles';
import Background from '../../../public/assets/images/barber-background.jpg';

const Product = ({ navigation }) => {
  const dispatch = useDispatch();

  // hooks
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState('');
  const [deleteService, setDeleteService] = useState('');
  const [deleteType, setDeleteType] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, serviceData } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(ProductAction.getProduct());
    dispatch(ProductAction.getService());
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(ProductAction.getProduct());
  }, []);

  const renderProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('NewProduct', { readOnly: true, item })
        }
      >
        <Text style={styles.description}>{item?.description}</Text>
        <Text style={[styles.price, { position: 'absolute', left: 230 }]}>
          R$ {item?.sell}
        </Text>
        <View style={{ position: 'absolute', right: 15 }}>
          <Icon
            name="trash"
            type="font-awesome"
            color={colors.black}
            size={20}
            onPress={() => {
              setModalVisible(true);
              setDeleteProduct(item?.id);
              setDeleteType(0);
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderService = ({ item }) => {
    console.log(item);
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('NewProduct', {
            readOnly: true,
            item,
            tabType: true,
          })
        }
      >
        <Text style={styles.description}>{item?.description}</Text>
        <Text style={[styles.price, { position: 'absolute', left: 230 }]}>
          R$ {item?.sell}
        </Text>
        <View style={{ position: 'absolute', right: 15 }}>
          <Icon
            name="trash"
            type="font-awesome"
            color={colors.black}
            size={20}
            onPress={() => {
              setModalVisible(true);
              setDeleteService(item?.id);
              setDeleteType(1);
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const handleDelete = () => {
    setModalVisible(!modalVisible);
    if (deleteType === 0) {
      dispatch(
        ProductAction.removeProductRequest({
          id: deleteProduct,
        }),
      );
    } else if (deleteType === 1) {
      dispatch(
        ProductAction.removeServiceRequest({
          id: deleteService,
        }),
      );
    }
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={Background}>
      <View>
        {loading ? (
          <ActivityIndicator
            style={{ marginTop: 100 }}
            size={40}
            color={colors.black}
          />
        ) : (
          <>
            <Collapse isCollapsed>
              <CollapseHeader style={styles.collapseHead}>
                <View>
                  <Text style={styles.collapseTitle}>Produtos</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                {data?.length ? (
                  <FlatList
                    data={data}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                    }
                  />
                ) : (
                  <View style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: 24,
                        color: colors.gray,
                      }}
                    >
                      Nenhum produto cadastrado
                    </Text>
                  </View>
                )}
              </CollapseBody>
            </Collapse>
            <Collapse isCollapsed>
              <CollapseHeader style={[styles.collapseHead, { marginTop: 20 }]}>
                <View>
                  <Text style={styles.collapseTitle}>Serviços</Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                {serviceData?.length ? (
                  <FlatList
                    data={serviceData}
                    renderItem={renderService}
                    keyExtractor={(item) => String(item.id)}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                      />
                    }
                  />
                ) : (
                  <View style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: 24,
                        color: colors.gray,
                      }}
                    >
                      Nenhum serviço cadastrado
                    </Text>
                  </View>
                )}
              </CollapseBody>
            </Collapse>
          </>
        )}
        <View style={styles.modalContainer}>
          <Modal visible={modalVisible}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Deseja excluir?</Text>
              <View style={styles.buttonContainer}>
                <Buttons
                  style={{ width: '45%', backgroundColor: colors.tomato }}
                  text="SIM"
                  onPress={() => handleDelete()}
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
    </ImageBackground>
  );
};

export default Product;
