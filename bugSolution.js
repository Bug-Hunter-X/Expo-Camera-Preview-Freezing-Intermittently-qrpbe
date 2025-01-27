// bugSolution.js
import React, { useState, useRef, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';

// ...other imports

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraChange = async (newType) => {
    setType(newType);
    // Clearing camera ref here to force a release of resources 
    if (cameraRef.current) {
      await cameraRef.current.pausePreviewAsync(); 
      cameraRef.current = null;
      setTimeout(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      },500) // adding small delay to allow for resources to clear
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
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          {/* UI elements for camera control */}
          <Button title="Flip Camera" onPress={() => handleCameraChange(type === CameraType.back ? CameraType.front : CameraType.back)} />
        </View>
      </Camera>
    </View>
  );
};

export default App;