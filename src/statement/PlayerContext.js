import React, {useState, useEffect} from 'react';
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

  const playLoadUrl = () => {
    initialPlay && setLoadingPlay(true);
    return () => {
      setTimeout(() => {
        SoundPlayer.playUrl('https://radiozero.fm/reproductor/proxy/');
      }, 1000);
    };
  };

  const play = player => {
    setPlaying(true);
    initialPlay ? player() : SoundPlayer.play();

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
      const player = playLoadUrl();
      playing ? pause() : play(player);

      setInitialPlay(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const _onFinishedPlayingSubscription = SoundPlayer.addEventListener(
      'FinishedPlaying',
      ({success}) => {
        console.log('finished playing', success);
      },
    );
    const _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        success && setLoadingPlay(false);
        console.log('finished loading', success);
      },
    );
    const _onFinishedLoadingFileSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingFile',
      ({success, name, type}) => {
        console.log('finished loading file', success, name, type);
      },
    );
    const _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingURL',
      ({success, url}) => {
        console.log('finished loading url', success, url);
      },
    );

    return () => {
      _onFinishedPlayingSubscription.remove();
      _onFinishedLoadingSubscription.remove();
      _onFinishedLoadingURLSubscription.remove();
      _onFinishedLoadingFileSubscription.remove();
    };
  }, []);

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
        pauseOnPodcast,
        play,
        pause,
      }}
    />
  );
};

export default PlayerContext;
