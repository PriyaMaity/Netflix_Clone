import React, { useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useDispatch, useSelector } from "react-redux";
import { getId } from "../redux/movieSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const selectedId = useSelector((store) => store.movies.id);

  useEffect(() => {
    if (Array.isArray(movies) && movies.length > 0 && !selectedId) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      dispatch(getId(movies[randomIndex].id));
    }
  }, [movies, selectedId, dispatch]);

  if (!Array.isArray(movies) || movies.length === 0) return null;

  const featured = movies.find((m) => m.id === selectedId) || movies[0];
  const { id, overview, title } = featured;
  return (
    <div className=" z-20">
      <VideoTitle movie_id={id} title={title} overview={overview} />
      <VideoBackground movie_id={id} bool={false} />
    </div>
  );
};

export default MainContainer;
