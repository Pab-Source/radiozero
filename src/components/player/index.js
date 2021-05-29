import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import PlayerContext from '../../statement/PlayerContext';
import GlobalState from '../../statement/GlobalContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Player = () => {
  const {togglePlayer, playing} = useContext(PlayerContext);

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
            height: 150,
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
      </View>
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
    marginTop: 1,
    top: 0,
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
  icon: {
    height: 36,
    width: 36,
  },
});

export default Player;
