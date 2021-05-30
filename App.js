import React, {useEffect} from 'react';
import {SafeAreaView, Platform} from 'react-native';
import RootNavigator from './src/navigator';
import SplashScreen from 'react-native-splash-screen';
import {GlobalState} from './src/statement/GlobalContext';
import {GlobalPlayer} from './src/statement/PlayerContext';
import RNANAndroidSettingsLibrary from 'react-native-android-settings-library';

const option = 'ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    Platform.OS === 'android' && RNANAndroidSettingsLibrary.open(option);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#051439'}}>
      <GlobalState>
        <GlobalPlayer>
          <RootNavigator />
        </GlobalPlayer>
      </GlobalState>
    </SafeAreaView>
  );
};

export default App;
