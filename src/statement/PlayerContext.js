import React, {useState} from 'react';
import SoundPlayer from 'react-native-sound-player';

export const PlayerContext = React.createContext({});

export const GlobalPlayer = ({children}) => {
  const [initialPlay, setInitialPlay] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [loadingPlay, setLoadingPlay] = useState(false);
  const [volumen, setVolumen] = useState(50);

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
      }}
    />
  );
};

export default PlayerContext;
