import React from 'react';
import {StyleSheet, View, Image, ScrollView, Platform} from 'react-native';
import Player from '../../components/player';

const Radio = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: Platform.OS === 'ios' ? 0 : 1,
      }}
      style={{flex: 1, backgroundColor: '#051439'}}>
      <View style={styles.content}>
        <Player />

        <View style={styles.socialWrapper}>
          <Image
            style={{height: 80, width: 80, marginRight: 30}}
            source={require('../../../assets/insta.png')}
          />
          <Image
            style={{height: 80, width: 80, marginRight: 30}}
            source={require('../../../assets/face.png')}
          />
          <Image
            style={{height: 80, width: 80}}
            source={require('../../../assets/twitt.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  socialWrapper: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
  },
  content: {
    backgroundColor: '#06143c',
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 33 : 63,
  },
});
export default Radio;
