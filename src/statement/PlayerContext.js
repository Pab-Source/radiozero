import React, {useState, useEffect} from 'react';
import RadioPlayer from 'react-native-radio-player';

export const PlayerContext = React.createContext({});

export const GlobalPlayer = ({children}) => {
  const [playing, setPlaying] = useState(false);
  const [playingPodcast, setPlayingPodcast] = useState(false);

  const play = async () => {
    setPlaying(true);
    RadioPlayer.play();
  };

  const pause = () => {
    setPlaying(false);
    RadioPlayer.stop();
  };

  const playOnPodcast = () => {
    setPlayingPodcast(true);
    playing && pause();
  };

  const pauseOnPodcast = () => {
    setPlayingPodcast(false);
    //RadioPlayer.play();
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

  return (
    <PlayerContext.Provider
      children={children}
      value={{
        togglePlayer,
        togglePlayerPodcast,
        playingPodcast,
        playing,
        pauseOnPodcast,
        play,
        pause,
      }}
    />
  );
};

export default PlayerContext;
