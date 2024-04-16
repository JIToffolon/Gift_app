export const getGifs = async (e) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    e
  )}&limit=10&api_key=5uIhmNM1pzSetowoTrm7YeYb3u3YTjo4`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
