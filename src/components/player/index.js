import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PlayerContext from '../../statement/PlayerContext';

const Player = () => {
  const {
    togglePlayer,
    infoArtist,
    playing,
    incrementVolume,
    decrementVolume,
    volumen,
  } = useContext(PlayerContext);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={{
            width: 327,
            height: '60%',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            resizeMode: infoArtist?.image ? 'cover' : 'contain',
          }}
          source={
            infoArtist?.image
              ? {uri: infoArtist?.image}
              : require('../../../assets/logo.png')
          }
        />
        <Text style={styles.textArtists}>
          {infoArtist?.title || 'Radio Zero'}
        </Text>
        <Text style={styles.textTitle}>
          {infoArtist?.artist || 'Radio Zero'}
        </Text>
        <View style={styles.wrapperControlVol}>
          <TouchableOpacity onPress={decrementVolume} opacity={1}>
            <Image
              style={styles.icon}
              source={require('../../../assets/volumen-mute.png')}
            />
          </TouchableOpacity>
          <View style={styles.vol}>
            <View style={{height: 3, backgroundColor: '#707070'}} />
            <View
              style={{
                position: 'absolute',
                width: `${volumen}%`,
                height: 5,
                backgroundColor: '#060F2F',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  borderRadius: 10,
                  height: 10,
                  width: 10,
                  justifyContent: 'center',
                  backgroundColor: '#060F2F',
                }}
              />
            </View>
          </View>
          <TouchableOpacity onPress={incrementVolume} opacity={1}>
            <Image
              style={styles.icon}
              source={require('../../../assets/volumen.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        opacity={1}
        style={styles.controlPlay}
        onPress={togglePlayer}>
        {playing ? (
          <Image
            style={{height: 95, width: 95}}
            source={require('../../../assets/pause.png')}
          />
        ) : (
          <Image
            style={{height: 95, width: 95}}
            source={require('../../../assets/play.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 327,
    height: '78%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    width: 327,
    borderColor: '#FFFDFD',
    borderRadius: 16,
    alignItems: 'center',
  },
  controlPlay: {
    zIndex: 1,
    marginTop: 10,
    top: -50,
  },
  wrapperControlVol: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textArtists: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    color: '#707070',
    alignSelf: 'flex-start',
    marginLeft: 18,
  },
  textTitle: {
    marginLeft: 18,
    alignSelf: 'flex-start',
    fontSize: 20,
    fontFamily: 'HelveticaNeue',
    color: '#707070',
  },
  vol: {
    width: 161,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  icon: {
    height: 36,
    width: 36,
  },
});

export default Player;
