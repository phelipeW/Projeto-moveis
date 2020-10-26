import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import Buttons from '../../components/Buttons';
import { Creators as BarberActions } from '../../store/ducks/barber';
import { colors } from '../../styles';
import Background from '../../../public/assets/images/barber-background.jpg';

const Barber = ({ navigation }) => {
  const dispatch = useDispatch();

  // hooks
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [deleteBarber, setDeleteBarber] = useState('');
  const { data, loading } = useSelector((state) => state.barber);

  useEffect(() => {
    dispatch(BarberActions.getBarberRequest());
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(BarberActions.getProduct());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('NewBarber', { readOnly: true, item })
        }
      >
        <Text style={styles.text}>{item?.name}</Text>
        <Icon
          name="trash"
          type="font-awesome"
          color={colors.black}
          size={20}
          onPress={() => {
            setModalVisible(true);
            setDeleteBarber(item?.id);
          }}
        />
      </TouchableOpacity>
    );
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
            {data?.length > 0 ? (
              <FlatList
                data={data}
                renderItem={renderItem}
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
                  Nenhum Barbeiro registrado
                </Text>
              </View>
            )}
          </>
        )}

        <View style={styles.modalContainer}>
          <Modal visible={modalVisible}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Deseja excluir?</Text>
              <View style={styles.buttonContainer}>
                <Buttons
                  style={{ width: '45%', backgroundColor: colors.dark }}
                  text="SIM"
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    dispatch(
                      BarberActions.deleteBarberRequest({ id: deleteBarber }),
                    );
                  }}
                />
                <Buttons
                  style={{ width: '45%', backgroundColor: colors.gray }}
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

export default Barber;
