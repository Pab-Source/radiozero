import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CardBlog = ({item, screen = ''}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={screen === 'events' ? 1 : 0.5}
      onPress={() =>
        screen === 'events' ? null : navigation.navigate('DetailsBlog', {item})
      }>
      <Image source={{uri: item.dataImage.image}} style={styles.image} />
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

export default CardBlog;
