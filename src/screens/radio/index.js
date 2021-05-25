import React from 'react';
import {StyleSheet, View, ScrollView, Platform} from 'react-native';
import Player from '../../components/player';

const Radio = () => {
  return (
    <ScrollView style={{height: '70%', backgroundColor: '#051439'}}>
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
    paddingTop: Platform.OS === 'ios' ? 33 : 23,
  },
});
export default Radio;
