export const API_END_POINT = import.meta.env.VITE_API_END_POINT;

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const NOW_PLAYING_MOVIES = `${BASE_URL}/movie/now_playing`;
export const POPULAR_MOVIES = `${BASE_URL}/movie/popular`;
export const TOP_RATED_MOVIES = `${BASE_URL}/movie/top_rated`;
export const UPCOMING_MOVIES = `${BASE_URL}/movie/upcoming`;
export const SEARCH_MOVIE = `${BASE_URL}/search/movie`;
export const posterUrl = "https://image.tmdb.org/t/p/w500";
