import React from "react";
import useMovieById from "../Hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id, bool }) => {
  const trailerMovie = useSelector((store) => store.movies.trailerMovie);
  useMovieById(movie_id);

  if (!trailerMovie || !trailerMovie.key) {
    return null;
  }
  return (
    <div
      className={
        bool ? "w-full h-60 sm:h-96" : "w-screen h-screen sm:aspect-video"
      }
    >
      <iframe
        className={"w-full h-full object-cover"}
        src={`https://www.youtube.com/embed/${trailerMovie.key}?si=bSb4leRPipax6RGC&autoplay=1&mute=1&controls=0&modestbranding=1`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
