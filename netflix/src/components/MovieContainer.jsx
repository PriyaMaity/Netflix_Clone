import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movies = useSelector((store) => store.movies);

  const SnapRow = ({ title, movies }) => (
    <div className="px-1 mb-8 last:mb-0">
      <h2 className="text-xl sm:text-2xl text-white mb-2 px-2">{title}</h2>
      <div
        className=" 
          flex overflow-x-auto snap-x snap-mandatory gap-2 sm:gap-2 pb-2 scrollbar-hide
        "
      >
        {movies.map((m) => (
          <div
            key={m.id}
            className="snap-start 
              flex-shrink-0 
              w-24 sm:w-32 md:w-48 
              px-1 sm:px-2"
          >
            <MovieList title={null} movies={[m]} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      id="movie-section"
      className="bg-black bg-opacity-80 w-full relative z-10 "
    >
      <SnapRow title={"Popular Movies"} movies={movies.popularMovies} />
      <SnapRow title={"Top Rated"} movies={movies.topRatedMovies} />
      <SnapRow title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <SnapRow title={"Upcoming Movies"} movies={movies.upComingMovies} />
    </div>
  );
};

export default MovieContainer;
