import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, Dimensions} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import HTML from 'react-native-render-html';
import RootNavigator from './src/navigator';

const App = () => {
  const [isStop, setIsStop] = useState(false);

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch('https://radiozero.fm/wp-json/wp/v2/posts/6777')
      .then(res => res.json())
      .then(res => setPost(res));
  }, []);

  useEffect(() => {
    SoundPlayer.loadUrl('https://radiozero.fm/reproductor/proxy/');
  }, []);

  const handlePlay = () => {
    if (isStop) {
      SoundPlayer.loadUrl('https://radiozero.fm/reproductor/proxy/');
      setIsStop(false);
    }
    SoundPlayer.play();
  };

  const onPause = () => {
    SoundPlayer.pause();
  };

  console.log(post?.content?.rendered);

  const {width} = Dimensions.get('window');

  return <RootNavigator />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
