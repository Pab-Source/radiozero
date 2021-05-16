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

export default constructorApi(queries);
