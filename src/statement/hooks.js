import {useState, useCallback, useEffect} from 'react';
import {podcast, blog, shows, releases, getArtist} from '../constants';

export const useInfoArtist = () => {
  const [infoArtist, setInfoArtist] = useState({
    title: 'Radio Zero',
    artist: 'Radio Zero',
  });

  const obtainArtist = async () => {
    try {
      const response = await getArtist();
      console.log(response);
      setInfoArtist(response);
    } catch (err) {
      console.log(err);
      setInfoArtist({title: 'Radio Zero', artist: 'Radio Zero'});
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      obtainArtist();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return {infoArtist};
};

export const usePodcastState = () => {
  const [dataPodcast, setDataPodcast] = useState([]);
  const [isLoadingPodcast, setIsLoadingPodcast] = useState(true);
  const [errorPodcast, setErrorPodcast] = useState(false);

  const getDataPodcast = async (query = '') => {
    if (errorPodcast) {
      return;
    }
    try {
      const dataResponse = await podcast(query);
      setDataPodcast(prev => [...prev, ...dataResponse]);
    } catch (err) {
      setErrorPodcast(true);
    }
  };

  const handleSetDataPodcast = useCallback(async () => {
    if (dataPodcast.length > 0) {
      return;
    }
    const dataResponse = await podcast();
    setDataPodcast(dataResponse);
    setIsLoadingPodcast(false);
  }, [dataPodcast]);

  return {
    isLoadingPodcast,
    dataPodcast,
    errorPodcast,
    handleSetDataPodcast,
    getDataPodcast,
  };
};

export const useBlogState = () => {
  const [dataBlog, setDataBlog] = useState([]);
  const [isLoadingBlog, setIsLoadingBlog] = useState(true);
  const [errorBlog, setErrorBlog] = useState(false);

  const getDataBlog = async (query = '') => {
    if (errorBlog) {
      return;
    }
    try {
      const dataResponse = await blog(query);
      setDataBlog(prev => [...prev, ...dataResponse]);
    } catch (err) {
      setErrorBlog(true);
    }
  };

  const handleSetDataBlog = useCallback(async () => {
    if (dataBlog.length > 0) {
      return;
    }
    const dataResponse = await blog();
    setDataBlog(dataResponse);
    setIsLoadingBlog(false);
  }, [dataBlog]);

  return {dataBlog, getDataBlog, handleSetDataBlog, isLoadingBlog, errorBlog};
};

export const useEventsState = () => {
  const [isLoadingEvents, setIsLoadingEvents] = useState(true);
  const [dataEvents, setDataEvents] = useState([]);
  const [errorEvents, setErrorEvents] = useState(false);

  const getDataEvents = async (query = '') => {
    if (errorEvents) {
      return;
    }
    try {
      const dataResponse = await shows(query);
      setDataEvents(prev => [...prev, ...dataResponse]);
    } catch (err) {
      setErrorEvents(true);
    }
  };

  const handleSetDataEvents = useCallback(async () => {
    if (dataEvents.length > 0) {
      return;
    }
    const dataResponse = await shows();
    setDataEvents(dataResponse);
    setIsLoadingEvents(false);
  }, [dataEvents]);

  return {isLoadingEvents, dataEvents, handleSetDataEvents, getDataEvents};
};

export const useReleasesState = () => {
  const [isLoadingReleases, setIsLoadingReleases] = useState(true);
  const [dataReleases, setDataReleases] = useState([]);
  const [errorReleases, setErrorReleases] = useState(false);

  const getDataReleases = async (query = '') => {
    if (errorReleases) {
      return;
    }
    try {
      const dataResponse = await releases(query);
      setDataReleases(prev => [...prev, ...dataResponse]);
    } catch (err) {
      setErrorReleases(true);
    }
  };

  const handleSetDataReleases = useCallback(async () => {
    if (dataReleases.length > 0) {
      return;
    }
    const dataResponse = await releases();
    setDataReleases(dataResponse);
    setIsLoadingReleases(false);
  }, [dataReleases]);

  return {
    dataReleases,
    isLoadingReleases,
    handleSetDataReleases,
    setIsLoadingReleases,
    getDataReleases,
  };
};
