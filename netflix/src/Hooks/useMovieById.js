// Hooks/useMovieById.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { options } from "../components/constants";
import { getTrailerMovie } from "../redux/movieSlice";

export default function useMovieById(movie_id) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movie_id) return;

    (async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
          options
        );
        const trailers = res.data.results.filter((v) => v.type === "Trailer");
        const chosen = trailers[0] || res.data.results[0];
        dispatch(getTrailerMovie(chosen));
      } catch (err) {
        console.error(err);
      }
    })();
  }, [movie_id, dispatch]);
}
