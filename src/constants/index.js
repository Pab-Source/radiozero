import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://radiozero.fm/wp-json/wp/v2',
});

const mappingDataMedia = async ({
  title,
  id,
  content,
  excerpt,
  featured_media,
}) => {
  try {
    const {
      data: {
        media_details: {
          sizes: {
            medium: {source_url},
          },
        },
        description,
      },
    } = await axiosInstance.get(`/media/${featured_media}`);
    return {
      title,
      id,
      content,
      excerpt,
      dataImage: {image: source_url, description: description.rendered},
    };
  } catch (err) {
    return {
      title,
      id,
      content,
      excerpt,
      dataImage: {image: null, description: null},
    };
  }
};

const caratule = async ({term}) => {
  try {
    const {data} = !term.includes('Radio Zero')
      ? await axios.get(
          `https://itunes.apple.com/search?term=${term}&limit=1`,
          {method: 'GET', redirect: 'follow'},
        )
      : {data: null};

    return data;
  } catch (err) {
    return null;
  }
};

export const getArtist = async () => {
  const {data} = await axios.get('https://radiozero.fm/ftp/CurrentSong.txt');

  const currentSong = await caratule({term: data});
  return {
    title: data,
    image: currentSong?.results[0]?.artworkUrl100,
  };
};

export const podcast = async (query = 1) => {
  const {data} = await axiosInstance.get(`/podcast?per_page=5&page=${query}`);
  const dataWithMedia = await Promise.all(data.map(mappingDataMedia));
  return dataWithMedia;
};

export const blog = async (query = 1) => {
  const {data} = await axiosInstance.get(`/posts?per_page=5&page=${query}`);
  const dataWithMedia = await Promise.all(data.map(mappingDataMedia));
  return dataWithMedia;
};

export const releases = async (query = 1) => {
  const {data} = await axiosInstance.get(
    `/posts?categories=393&per_page=5&page=${query}`,
  );
  const dataWithMedia = await Promise.all(data.map(mappingDataMedia));
  return dataWithMedia;
};

export const shows = async (query = 1) => {
  const {data} = await axiosInstance.get(`/shows?per_page=5&page=${query}`);
  const dataWithMedia = await Promise.all(data.map(mappingDataMedia));
  return dataWithMedia;
};
