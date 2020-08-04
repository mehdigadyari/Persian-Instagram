import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React from 'react';
import { AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SplashScreen({ navigation }) {


  return (
    <AppLoading
      startAsync={loadResourcesAsync}
      onError={handleLoadingError}
      onFinish={() => handleFinishLoading(navigation)}
    />
  );

}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
  
    ]),
    Font.loadAsync({
      // 'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
      // 'irsanss': require('../../assets/fonts/irsans.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

async function handleFinishLoading(navigation) {

  let mobile = await AsyncStorage.getItem('mobile')

  if (mobile != null && mobile.length > 0) {
    navigation.navigate('Main')
  } else {
    navigation.navigate('SignIn')

  }
}