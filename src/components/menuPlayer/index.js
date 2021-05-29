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
      <View style={styles.containerRight}>
        <View style={styles.infoArtist}>
          <Text style={styles.title}>{infoArtist?.title || 'Radio Zero'}</Text>
          <Text style={styles.artist}>
            {infoArtist?.artist || 'Radio Zero'}
          </Text>
        </View>

        <TouchableOpacity onPress={togglePlayer}>
          {playing ? (
            <Icon name="pause-circle" color="white" size={30} />
          ) : (
            <Icon name="play-circle" color="white" size={30} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRight: {
    flexBasis: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoArtist: {
    flexBasis: '75%',
    justifyContent: 'center',
    marginLeft: 18,
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
    flexBasis: '18%',
    height: 43,
    width: 43,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export default MenuPlayer;
