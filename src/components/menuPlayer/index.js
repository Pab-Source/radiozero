import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import PlayerContext from '../../statement/PlayerContext';
import GlobalState from '../../statement/GlobalContext';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuPlayer = () => {
  const {togglePlayer, playing} = useContext(PlayerContext);

  const {infoArtist} = useContext(GlobalState);

  return (
    <View style={styles.container}>
      <Image
        source={
          infoArtist?.image
            ? {uri: infoArtist?.image}
            : {
                uri: 'https://radiozero.fm/wp-content/uploads/2021/03/logo-radio-zero-fm.png',
              }
        }
        style={styles.image}
      />
      <View style={styles.infoArtist}>
        <Text style={styles.title}>{infoArtist?.title || 'Radio Zero'}</Text>
        <Text style={styles.artist}>{infoArtist?.artist || 'Radio Zero'}</Text>
      </View>
      <TouchableOpacity style={styles.player} onPress={togglePlayer}>
        {playing ? (
          <Icon name="pause-circle" color="white" size={30} />
        ) : (
          <Icon name="play-circle" color="white" size={30} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: '3%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoArtist: {
    paddingLeft: 20,
    flexBasis: '68%',
    maxWidth: '68%',
    justifyContent: 'center',
    height: 63,
  },
  title: {
    color: 'white',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 10,
  },
  artist: {
    color: 'white',
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
  },
  play: {height: 63, width: 61},
  image: {
    flexBasis: '16%',
    height: 53,
    width: 53,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  player: {
    flexBasis: '16%',
    alignItems: 'center',
  },
});

export default MenuPlayer;
