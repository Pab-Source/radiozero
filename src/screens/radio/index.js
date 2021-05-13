import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import Player from '../../components/player';

const Radio = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#06143c',
          flex: 1,
          alignItems: 'center',
          paddingTop: 63,
        }}>
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default Radio;
