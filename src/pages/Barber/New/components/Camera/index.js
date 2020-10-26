import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Icon } from 'react-native-elements';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import { colors, metrics } from '../../../../../styles';
import styles from './styles';

export default function CameraRender({ setPhoto, setOpen, setAvatar }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePic = async () => {
    const photoData = await cameraRef?.current?.takePictureAsync({
      skipProcessing: true,
    });
    setPhoto(photoData?.uri);
    setOpen(false);
    setAvatar(null);
  };

  const flip = () => {
    if (type === Camera.Constants.Type.back) {
      setType(Camera.Constants.Type.front);
    } else {
      setType(Camera.Constants.Type.back);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        <View style={styles.bottomContainer}>
          <View style={{ flexDirection: 'row', width: '37%' }}>
            <TouchableOpacity
              style={[styles.iconContainer, styles.iconPadding]}
              onPress={() => flip()}
            >
              <MaterialIcon name="flip" size={25} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '26%' }}>
            <TouchableOpacity
              style={[styles.imgContainer]}
              onPress={() => takePic()}
            >
              <Icon name="camera" size={25} style={styles.img} />
            </TouchableOpacity>
          </View>
          <View style={styles.closeContainer}>
            <TouchableOpacity
              style={[styles.iconContainer, styles.iconPaddingx2]}
              onPress={() => {
                setOpen(false);
              }}
            >
              <Icon name="close" size={25} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}
