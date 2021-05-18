import React, {useContext} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import PlayerContext from '../../statement/PlayerContext';

const MenuPlayer = () => {
  const {togglePlayer, infoArtist} = useContext(PlayerContext);

  return (
    <View style={styles.container}>
      <Image
        source={
          infoArtist?.image
            ? {uri: infoArtist?.image}
            : require('../../../assets/logo.png')
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
          <Image
            source={require('../../../assets/icono_radio.png')}
            style={styles.play}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRight: {
    flexBasis: '81%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoArtist: {
    justifyContent: 'center',
    marginLeft: 18,
    height: 63,
  },
  title: {
    maxWidth: '90%',
    color: 'white',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  artist: {
    color: 'white',
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
  },
  play: {height: 63, width: 61},
  image: {
    flexBasis: '18%',
    height: 63,
    width: 63,
    borderRadius: 10,
  },
});

export default MenuPlayer;
