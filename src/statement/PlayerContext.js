import React, {useState, useEffect} from 'react';
import RadioPlayer from 'react-native-radio-player';

export const PlayerContext = React.createContext({});

export const GlobalPlayer = ({children}) => {
  const [playing, setPlaying] = useState(false);
  const [playingPodcast, setPlayingPodcast] = useState(false);
  const [loadingPlay, setLoadingPlay] = useState(false);

  const play = async () => {
    setLoadingPlay(true);
    setPlaying(true);
    RadioPlayer.play();
    setLoadingPlay(false);
  };

  const pause = () => {
    setPlaying(false);
    RadioPlayer.stop();
  };

  const playOnPodcast = () => {
    setPlayingPodcast(true);
    RadioPlayer.stop();
  };

  const pauseOnPodcast = () => {
    setPlayingPodcast(false);
    RadioPlayer.play();
  };

  const togglePlayer = async () => {
    try {
      playing ? pause() : play();
    } catch (err) {
      console.log(err);
    }
  };

  const togglePlayerPodcast = async () => {
    try {
      playingPodcast ? pauseOnPodcast() : playOnPodcast();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    RadioPlayer.radioURLWithMetadataSeparator(
      'https://radiozero.fm/reproductor/proxy/',
      '-',
    );
  }, []);

  useEffect(() => {}, []);

  return (
    <PlayerContext.Provider
      children={children}
      value={{
        togglePlayer,
        togglePlayerPodcast,
        playingPodcast,
        playing,
        loadingPlay,
        pauseOnPodcast,
        play,
        pause,
      }}
    />
  );
};

export default PlayerContext;
