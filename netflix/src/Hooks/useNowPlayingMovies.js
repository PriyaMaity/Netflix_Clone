import axios from "axios";
import { NOW_PLAYING_MOVIES, options } from "../components/constants";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const nowPlayingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(NOW_PLAYING_MOVIES, options);
    dispatch(getNowPlayingMovies(res.data.results));
  } catch (err) {
    console.log(err, "error");
  }
};

export default nowPlayingMovies;
