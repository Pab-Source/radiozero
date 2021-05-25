import React, {useEffect, useContext, useState, useCallback} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Menu from '../../components/menu';
import HTML, {IGNORED_TAGS} from 'react-native-render-html';
import PlayerContext from '../../statement/PlayerContext';
import Video from 'react-native-video';

const DetailPodcast = ({
  route: {
    params: {item},
  },
  navigation,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const {playing, play, pause} = useContext(PlayerContext);

  const mp3 = item.content.rendered
    ?.split(' ')
    ?.filter(i => i.includes('upload'))[0]
    ?.slice(5, -5);

  const playPodcast = async () => {
    setIsPlaying(true);
  };

  const pausePodcast = async () => {
    setIsPlaying(false);
  };

  const togglePodcast = useCallback(() => {
    if (playing) {
      if (!isPlaying) {
        pause();
        playPodcast();
      }
    } else {
      if (isPlaying) {
        pausePodcast();
        play();
      }
    }
  }, [isPlaying, play, pause, playing]);

  useEffect(() => {
    if (playing) {
      pausePodcast();
    }
    navigation.addListener('blur', () => {
      !playing && togglePodcast();
    });
  }, [navigation, togglePodcast, playing, isPlaying]);

  return (
    <ScrollView style={styles.container}>
      <Menu toggle={togglePodcast} />
      <StatusBar backgroundColor="#000000" animated={true} />
      <View style={styles.wrapperImage}>
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
              : {...styles.image, resizeMode: 'contain'}
          }
        />
        <Text style={styles.textTitle}>{item.title.rendered}</Text>
      </View>

      <View style={styles.contentArticule}>
        <HTML
          imagesMaxWidth={Dimensions.get('window').width}
          source={{
            html: item.content.rendered,
          }}
          contentWidth={Dimensions.get('window').width}
          ignoredTags={[
            ...IGNORED_TAGS,
            'iframe',
            'img',
            'picture',
            'figure',
            'audio',
            'source',
            'video',
          ]}
        />
      </View>
      {isPlaying && <Video source={{uri: mp3}} />}
      {mp3 && (
        <View style={styles.wrapperControlVol}>
          <TouchableOpacity onPress={togglePodcast}>
            {isPlaying ? (
              <Image
                source={require('../../../assets/pause.png')}
                style={{height: 50, width: 50}}
              />
            ) : (
              <Image
                source={require('../../../assets/play.png')}
                style={{height: 50, width: 50}}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.reproTitle}>{item.title.rendered}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  wrapperImage: {
    backgroundColor: '#051439',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 280,
    opacity: 0.7,
  },
  textTitle: {
    backgroundColor: 'transparent',
    position: 'absolute',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 32,
    maxWidth: '85%',
    color: 'white',
    paddingBottom: 12,
    borderBottomColor: '#DC4E32',
    borderBottomWidth: 5,
  },
  contentArticule: {
    margin: 20,
  },
  wrapperControlVol: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    paddingVertical: 10,
    backgroundColor: '#000000',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  vol: {
    width: 161,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  icon: {
    height: 100,
    width: 100,
  },
  reproTitle: {
    color: 'white',
    marginLeft: 20,
  },
});

export default DetailPodcast;
