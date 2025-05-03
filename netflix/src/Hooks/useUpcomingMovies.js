import axios from "axios";
import { UPCOMING_MOVIES, options } from "../components/constants";
import { getUpcomingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const upComingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(UPCOMING_MOVIES, options);
    dispatch(getUpcomingMovies(res.data.results));
  } catch (err) {
    console.log(err, "error");
  }
};

export default upComingMovies;
