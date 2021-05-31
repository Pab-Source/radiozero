import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CardPodcast = ({item, screen = ''}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={screen === 'events' ? 1 : 0.5}
      onPress={() =>
        screen === 'events'
          ? null
          : navigation.navigate('DetailsPodcast', {item})
      }>
      <Image
        source={
          item.dataImage.image
            ? {uri: item.dataImage.image}
            : {
                uri: 'https://radiozero.fm/wp-content/uploads/2021/03/logo-radio-zero-fm.png',
              }
        }
        style={
          item.dataImage.image
            ? styles.image
            : {
                ...styles.image,
                backgroundColor: 'white',
                resizeMode: 'center',
              }
        }
      />
      <Text style={styles.titleImage}>{item.title.rendered}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 204,
    width: '100%',
    marginBottom: 16,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 3,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
  titleImage: {
    position: 'absolute',
    color: 'white',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    top: '35%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default CardPodcast;
