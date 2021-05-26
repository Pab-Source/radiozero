import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import PlayerContext from '../../statement/PlayerContext';
import GlobalState from '../../statement/GlobalContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Player = () => {
  const {
    togglePlayer,
    playing,
    incrementVolume,
    decrementVolume,
    volumen,
    loadingPlay,
  } = useContext(PlayerContext);

  const {
    infoArtist,
    social: {openInstagram, openFacebook, openTwitter},
  } = useContext(GlobalState);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={{
            width: infoArtist?.image ? '100%' : '80%',
            flex: 1,
            marginTop: 0,
            height: 250,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            resizeMode: infoArtist?.image ? 'stretch' : 'contain',
          }}
          source={
            infoArtist?.image
              ? {uri: infoArtist?.image?.replace(/100/g, '600')}
              : {
                  uri: 'https://radiozero.fm/wp-content/uploads/2021/03/logo-radio-zero-fm.png',
                }
          }
        />
        <Text style={styles.textArtists}>
          {infoArtist?.title || 'Radio Zero'}
        </Text>
        <Text style={styles.textTitle}>{'Radio Zero'}</Text>
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
                height: 4,
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
      {loadingPlay && (
        <ActivityIndicator style={{marginTop: 10}} size="large" color="white" />
      )}
      <TouchableOpacity
        opacity={1}
        style={styles.controlPlay}
        onPress={togglePlayer}>
        {playing ? (
          <Icon
            name="pause-circle"
            size={95}
            color="white"
            style={{height: 95, width: 95}}
          />
        ) : (
          <Icon
            name="play-circle"
            size={95}
            color="white"
            style={{height: 95, width: 95}}
          />
        )}
      </TouchableOpacity>
      <View style={styles.socialWrapper}>
        <TouchableOpacity onPress={openInstagram}>
          <Image
            style={{height: 80, width: 80, marginRight: 30}}
            source={require('../../../assets/insta.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openFacebook}>
          <Image
            style={{height: 80, width: 80, marginRight: 30}}
            source={require('../../../assets/face.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={openTwitter}>
          <Image
            style={{height: 80, width: 80}}
            source={require('../../../assets/twitt.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    height: 200,
  },
  wrapper: {
    width: 327,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    width: 327,
    borderColor: '#FFFDFD',
    borderRadius: 16,
    alignItems: 'center',
    paddingHorizontal: 1,
    paddingBottom: 30,
  },
  controlPlay: {
    marginTop: 10,
    zIndex: 1,
    top: 0,
  },
  wrapperControlVol: {
    marginVertical: 10,
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
