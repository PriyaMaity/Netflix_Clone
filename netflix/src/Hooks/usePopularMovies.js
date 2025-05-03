import axios from "axios";
import { POPULAR_MOVIES, options } from "../components/constants";
import { getPopularMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const popularMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(POPULAR_MOVIES, options);
    dispatch(getPopularMovies(res.data.results));
  } catch (err) {
    console.log(err, "error");
  }
};

export default popularMovies;
