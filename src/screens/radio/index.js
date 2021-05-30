import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Player from '../../components/player';

const Radio = () => {
  return (
    <ScrollView
      contentContainerStyle={{flex: 1}}
      style={{backgroundColor: '#051439', height: '100%'}}>
      <View style={styles.content}>
        <Player />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#06143c',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Radio;
