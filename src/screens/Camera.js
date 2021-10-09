import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { CButton } from '../elements';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import {
  CircleSvg,
  Rectangle_RoundedSvg
} from '../svg';
 
const CameraScreen = () => {

  const [{ cameraRef }, { takePicture }] = useCamera(null);

  const capture = async () => {
    try {
      const data = await takePicture();
      RNFS.moveFile(data.uri, RNFS.ExternalDirectoryPath + '/capture.jpg')
        .then(() => {
          console.log(RNFS.ExternalDirectoryPath + '/capture.jpg');
        })
        .catch(error => {
          console.log(error);
        })
    } 
    catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.cameraView}
      > 
      <Rectangle_RoundedSvg bgColor='rgba(76, 175, 80, 1)' CornerRadius={25} />
      </RNCamera> 
      <CButton title="Capture" onPress={() => capture()} />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start'
  }
});

export default CameraScreen;
