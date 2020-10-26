import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '@expo/vector-icons/FontAwesome';
import styles from './styles';
import { hpd } from '../../../../../helpers/scalling';
import { CameraContext } from '../../../../../components/CameraProvider';

const ProfilePicture = ({ profileRef, setOpen }) => {
  const { pickImage } = useContext(CameraContext);
  return (
    <RBSheet ref={profileRef} height={hpd(25)} duration={250} closeOnDragDown>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
          }}
        >
          <View style={[styles.btn, styles.borderBottom]}>
            <Icon style={styles.icon} name="camera" size={25} />
            <Text style={styles.text}>Tirar foto</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            pickImage({
              aspect: [4, 4],
              callback: () => {
                profileRef.current?.close();
              },
            });
          }}
        >
          <View style={styles.btn}>
            <Icon style={styles.icon} name="photo" size={25} />
            <Text style={styles.text}>Escolher foto</Text>
          </View>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
};

export default ProfilePicture;
