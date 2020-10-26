import React, { useState, useRef, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from 'react-native-flash-message';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { Icon } from 'react-native-elements';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import {
  Platform,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  BackHandler,
} from 'react-native';
import { colors } from '../../styles';
import styles from './styles';
import { wpd, hpd } from '../../helpers/scalling';

export const CameraContext = React.createContext(null);

const CameraProvider = ({ children }) => {
  const cameraRef = useRef();
  const [avatar, setAvatar] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [, setRatio] = useState(null);
  const [open, setOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [Frame, setFrame] = useState(null);
  const [detect, setDetect] = useState(false);
  const [faceOk] = useState(true);

  useEffect(() => {
    if (avatar) {
      setOpen(false);
      setFrame(null);
      setDetect(false);
    }
  }, [avatar]);

  function handleBackButtonClick() {
    setOpen(false);
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const flip = () => {
    if (type === Camera.Constants.Type.back) {
      setType(Camera.Constants.Type.front);
    } else {
      setType(Camera.Constants.Type.back);
    }
  };

  const getPermissionForCamera = async () => {
    let valueCamera = null;
    let valueRoll = null;
    if (Platform.OS === 'android') {
      const permission = await Permissions.getAsync(Permissions.CAMERA);
      if (permission.status !== 'granted') {
        const newPermission = await Permissions.askAsync(Permissions.CAMERA);
        if (newPermission.status === 'granted') {
          setHasPermission(newPermission.status === 'granted');
          return true;
        }
      }
      setHasPermission(permission.status === 'granted');
      console.log(permission.status);
      return true;
      // eslint-disable-next-line no-else-return
    } else {
      const CameraPermission = await Permissions.getAsync(Permissions.CAMERA);
      const RollPermission = await Permissions.getAsync(
        Permissions.CAMERA_ROLL,
      );
      if (RollPermission.status !== 'granted') {
        const newPermission = await Permissions.askAsync(
          Permissions.CAMERA_ROLL,
        );
        if (newPermission.status === 'granted') {
          setHasPermission(newPermission.status === 'granted');
          valueRoll = true;
        } else {
          valueRoll = false;
        }
      } else {
        valueRoll = true;
        setHasPermission(true);
      }

      if (CameraPermission.status !== 'granted') {
        const newPermissionCamera = await Permissions.askAsync(
          Permissions.CAMERA,
        );
        if (newPermissionCamera.status === 'granted') {
          setHasPermission(newPermissionCamera.status === 'granted');
          valueCamera = true;
        }
      } else {
        valueCamera = true;
      }
    }

    if (valueCamera && valueRoll) {
      console.log('permissões concedidas', valueCamera, valueRoll);
      return true;
    }
    console.log('permissões nao concedidas', valueCamera, valueRoll);
    return false;
  };

  const pickImage = async ({ aspect, callback }) => {
    const status = await getPermissionForCamera();
    if (!status) {
      showMessage({
        message: 'Você recusou a permissão da galeria!',
        type: 'default',
        backgroundColor: colors.tomato,
        color: colors.white,
      });
      callback();
    } else {
      setTimeout(async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect,
        });
        setAvatar(result?.uri);
        callback();
      }, 300);
    }
  };

  const takePicture = async ({ frame, callback }) => {
    const status = await getPermissionForCamera();
    if (!status) {
      showMessage({
        message: 'Você recusou a permissão da câmera!',
        type: 'default',
        backgroundColor: colors.tomato,
        color: colors.white,
      });
    } else {
      if (frame) {
        setFrame(frame);
      }
      setOpen(true);
      if (detect) {
        setDetect(true);
      }
      setType(
        detect ? Camera.Constants.Type.front : Camera.Constants.Type.back,
      );
    }
    callback();
  };

  const takePic = async () => {
    const photoData = await cameraRef?.current?.takePictureAsync({
      skipProcessing: true,
    });
    setAvatar(photoData?.uri);
  };

  const prepareRatio = async () => {
    if (Platform.OS === 'android' && cameraRef?.current) {
      const ratios = await cameraRef?.current?.getSupportedRatiosAsync();

      const newRatio =
        ratios.find((r) => r === '16:9') || ratios[ratios.length - 1];

      setRatio(newRatio);
    }
  };

  return (
    <CameraContext.Provider
      value={{
        takePicture,
        avatar,
        setAvatar,
        pickImage,
        open,
        type,
        getPermissionForCamera,
      }}
    >
      {open && hasPermission && (
        <View style={styles.container} on>
          {console.log('render camera')}
          <Camera
            onCameraReady={prepareRatio}
            style={styles.cameraContainer}
            ref={cameraRef}
            type={type}
          />
          {Frame && (
            <View
              style={{
                backgroundColor: '#33333333',
                height: hpd(80),
                paddingVertical: hpd(5),
                width: wpd(100),
                position: 'absolute',
                top: StatusBar.currentHeight,
              }}
            >
              <Image
                source={Frame}
                style={{
                  width: undefined,
                  height: undefined,
                  flex: 1,
                  alignSelf: 'stretch',
                }}
                resizeMode="contain"
              />
            </View>
          )}
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
                style={[
                  styles.imgContainer,
                  detect && !faceOk && { borderColor: '#FFFFFF33' },
                ]}
                disabled={detect ? !faceOk : false}
                onPress={() => takePic()}
              >
                <Icon
                  name="camera"
                  size={25}
                  style={styles.img}
                  color={`#FFFfff${detect && !faceOk ? '33' : ''}`}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.closeContainer}>
              <TouchableOpacity
                style={[styles.iconContainer, styles.iconPaddingx2]}
                onPress={() => {
                  setFrame(null);
                  setOpen(false);
                  setDetect(false);
                }}
              >
                <Icon name="close" size={25} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {children}
    </CameraContext.Provider>
  );
};

export default CameraProvider;
