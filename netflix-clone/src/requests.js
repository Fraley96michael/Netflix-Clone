const API_KEY = "a662031c00aaea858b048c3d7902df6e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
};

export default requests;
