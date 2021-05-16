import React, {useEffect, useState, useCallback} from 'react';
import WpApi from '../constants';

const Context = React.createContext({});

export const GlobalState = ({children}) => {
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);
  const [isLoadingPodcast, setIsLoadingPodcast] = useState(true);
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);
  const [isLoadingReleases, setIsLoadingReleases] = useState(true);

  const [dataBlog, setDataBlog] = useState([]);
  const [dataPodcast, setDataPodcast] = useState([]);
  const [dataEvents, setDataEvents] = useState([]);
  const [dataReleases, setDataReleases] = useState([]);

  const handleSetDataBlog = useCallback(async () => {
    if (dataBlog.length > 0) {
      return;
    }
    const dataResponse = await WpApi.blog();
    setDataBlog(dataResponse);
    setIsLoadingBlog(false);
  }, [dataBlog]);

  const handleSetDataPodcast = useCallback(async () => {
    if (dataPodcast.length > 0) {
      return;
    }
    const dataResponse = await WpApi.podcast();
    setDataPodcast(dataResponse);
    setIsLoadingPodcast(false);
  }, [dataPodcast]);

  const handleSetDataEvents = useCallback(async () => {
    if (dataEvents.length > 0) {
      return;
    }
    const dataResponse = await WpApi.shows();
    setDataEvents(dataResponse);
    setIsLoadingEvents(false);
  }, [dataEvents]);

  const handleSetDataReleases = useCallback(async () => {
    if (dataReleases.length > 0) {
      return;
    }
    const dataResponse = await WpApi.releases();
    setDataReleases(dataResponse);
    setIsLoadingReleases(false);
  }, [dataReleases]);

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

  return (
    <Context.Provider
      value={{
        blog: {dataBlog, isLoadingBlog, handleSetDataBlog},
        podcast: {dataPodcast, isLoadingPodcast, handleSetDataPodcast},
        events: {dataEvents, isLoadingEvents, handleSetDataEvents},
        releases: {dataReleases, isLoadingReleases, handleSetDataReleases},
      }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
