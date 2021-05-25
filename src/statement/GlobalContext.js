import React, {useEffect, useCallback} from 'react';
import {Linking} from 'react-native';
import {
  usePodcastState,
  useBlogState,
  useEventsState,
  useReleasesState,
  useInfoArtist,
} from './hooks';

const instagramUrl = 'https://instagram.com/radiozero_arg';
const facebookUrl = 'https://www.facebook.com/RadioZero91.1';
const twitterUrl = 'https://twitter.com/RadioZero911';

const Context = React.createContext({});

export const GlobalState = ({children}) => {
  const {handleSetDataPodcast, ...podcast} = usePodcastState();
  const {handleSetDataBlog, ...blog} = useBlogState();
  const {handleSetDataEvents, ...events} = useEventsState();
  const {handleSetDataReleases, ...releases} = useReleasesState();
  const {infoArtist} = useInfoArtist();

  const getData = useCallback(() => {
    handleSetDataReleases();
    handleSetDataEvents();
    handleSetDataPodcast();
    handleSetDataBlog();
  }, [
    handleSetDataBlog,
    handleSetDataPodcast,
    handleSetDataEvents,
    handleSetDataReleases,
  ]);

  useEffect(() => {
    getData();
  }, [getData]);

  const openUrl = useCallback(
    url => async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      }
    },
    [],
  );

  return (
    <Context.Provider
      value={{
        blog,
        podcast,
        events,
        releases,
        infoArtist,
        social: {
          openInstagram: openUrl(instagramUrl),
          openFacebook: openUrl(facebookUrl),
          openTwitter: openUrl(twitterUrl),
        },
      }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
