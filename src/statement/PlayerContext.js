import React, {useState, useEffect} from 'react';
import WpApi from '../constants';
import SoundPlayer from 'react-native-sound-player';

export const PlayerContext = React.createContext({});

export const GlobalPlayer = ({children}) => {
  const [initialPlay, setInitialPlay] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [loadingPlay, setLoadingPlay] = useState(false);
  const [volumen, setVolumen] = useState(50);

  const [infoArtist, setInfoArtist] = useState({
    title: 'Radio Zero',
    artist: 'Radio Zero',
  });

  const obtainArtist = async () => {
    try {
      const response = await WpApi.getArtist();
      console.log(response);
      setInfoArtist(response);
    } catch (err) {
      setInfoArtist({title: 'Radio Zero', artist: 'Radio Zero'});
    }
  };

  useEffect(() => {
    obtainArtist();
  }, []);

  const incrementVolume = () => {
    if (volumen === 100) {
      return;
    }
    const vol = volumen + 10;
    setVolumen(vol);
    SoundPlayer.setVolume(vol / 100);
  };

  const decrementVolume = () => {
    if (volumen === 0) {
      return;
    }
    const vol = volumen - 10;
    setVolumen(vol);
    SoundPlayer.setVolume(vol / 100);
  };

  const play = () => {
    setPlaying(true);
    setLoadingPlay(true);
    initialPlay
      ? SoundPlayer.playUrl('https://radiozero.fm/reproductor/proxy/')
      : SoundPlayer.play();

    setLoadingPlay(false);

    initialPlay && SoundPlayer.setVolume(volumen / 100);
  };

  const pauseOnPodcast = () => {
    SoundPlayer.pause();
    setPlaying(false);
    setInitialPlay(true);
  };

  const pause = () => {
    setPlaying(false);
    SoundPlayer.pause();
  };

  const togglePlayer = async () => {
    try {
      playing ? pause() : play();
      setInitialPlay(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PlayerContext.Provider
      children={children}
      value={{
        togglePlayer,
        playing,
        incrementVolume,
        decrementVolume,
        volumen,
        loadingPlay,
        infoArtist,
        pauseOnPodcast,
        play,
        pause,
      }}
    />
  );
};

export default PlayerContext;
