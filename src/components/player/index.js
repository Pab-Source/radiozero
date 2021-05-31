import React, {useContext, useState, useEffect} from 'react';
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
  const {togglePlayer, playing} = useContext(PlayerContext);

  const [charge, setCharge] = useState(playing);

  const {
    infoArtist,
    social: {openInstagram, openFacebook, openTwitter},
  } = useContext(GlobalState);

  useEffect(() => {
    setCharge(playing);
    if (playing) {
      setTimeout(() => {
        setCharge(false);
      }, 3000);
    }
  }, [playing]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={{
            marginTop: -2,
            width: '101%',
            height: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
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
      {charge && <ActivityIndicator size="large" color="white" />}
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
  },
  wrapper: {
    width: 327,
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    width: 327,
    borderColor: '#FFFDFD',
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 1,
    paddingBottom: 30,
  },
  controlPlay: {
    marginVertical: 8,
    padding: 1,
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
