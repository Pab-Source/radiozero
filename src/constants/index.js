const BASE_URL = 'https://radiozero.fm/wp-json/wp/v2/';

const queries = {
  shows: 'shows',
  releases: 'posts?categories=393',
  blog: 'posts',
  podcast: 'podcast',
};

const getMedia = async id => {
  const request = await fetch(`${BASE_URL}media/${id}`);
  const response = await request.json();
  return response;
};

const mappingDataMedia = async ({
  title,
  id,
  content,
  excerpt,
  featured_media,
}) => {
  const {guid, description} = await getMedia(featured_media);
  return {
    title,
    id,
    content,
    excerpt,
    dataImage: {image: guid.rendered, description: description.rendered},
  };
};

const createRequest = item => {
  return async () => {
    const request = await fetch(`${BASE_URL}${item}`);
    const response = await request.json();
    const dataWithMedia = await Promise.all(response.map(mappingDataMedia));
    return dataWithMedia;
  };
};

const constructorApi = queryObj => {
  const querysList = Object.keys(queryObj);

  const valuesList = Object.values(queryObj);

  return valuesList.reduce((acc, item, index) => {
    return {
      ...acc,
      [querysList[index]]: createRequest(item),
    };
  }, {});
};

const getArtist = async () => {
  const request = await fetch('http://radiozero.fm/ftp/CurrentSong.txt', {
    'Content-Type': 'text/plain',
  });
  const response = await request.text();

  console.log(response);
  const dividerText = response.split('-');

  const formatData =
    dividerText.length === 2
      ? dividerText.reduce((acc, item, index) => {
          return index
            ? {
                ...acc,
                title: item ? item.trim() : 'Radio Zero',
              }
            : {...acc, artist: item ? item.trim() : 'Radio Zero'};
        }, {})
      : {title: 'Radio Zero', artist: 'Radio Zero', image: ''};

  /* 
  const getImage = await fetch(
    `https://itunes.apple.com/search?term=${formatData.artist}&limit=1`,
  );
  const responseImage = await getImage.json();
  const image = responseImage.results[0]?.artworkUrl100;
  */
  return {
    ...formatData,
    image: '',
  };
};

export default {...constructorApi(queries), getArtist};
