import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useCameraDevice, useCameraPermission} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera-text-recognition';

function CarCollection() {
  const [data, setData] = useState<any>(null);
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  if (!hasPermission) {
    requestPermission();
  }
  console.log(data);
  return (
    <>
      {!!device && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive
          options={{
            language: 'latin',
          }}
          mode={'recognize'}
          callback={d => setData(d)}
        />
      )}
    </>
  );
}

export default CarCollection;
