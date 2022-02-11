export const getGifs = async (category) => {
  const API_KEY = "JdizWfycGxdz0a89Syan9awMDl4yqBiw";
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20&lang=en`;

  const res = await fetch(API_URL);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      tittle: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
