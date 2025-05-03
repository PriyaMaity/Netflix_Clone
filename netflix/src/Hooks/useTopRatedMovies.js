import axios from "axios";
import { TOP_RATED_MOVIES, options } from "../components/constants";
import { getTopRatedMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const topRatedMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(TOP_RATED_MOVIES, options);
    dispatch(getTopRatedMovies(res.data.results));
  } catch (err) {
    console.log(err, "error");
  }
};

export default topRatedMovies;
