import React, {useEffect} from 'react';
import {SafeAreaView, LogBox, PermissionsAndroid} from 'react-native';
import RootNavigator from './src/navigator';
import SplashScreen from 'react-native-splash-screen';
import {GlobalState} from './src/statement/GlobalContext';
import {GlobalPlayer} from './src/statement/PlayerContext';

LogBox.ignoreAllLogs(true);

console.log(PermissionsAndroid);
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
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
