import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigator from './src/navigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#051439'}}>
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
