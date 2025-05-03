import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-1 sm:px-4 mb-4">
      <h1 className="text-3xl text-white mb-5 mt-5">{title}</h1>
      <div className="snap-start flex-shrink-0 px-1 sm:px-2">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie_id={movie.id}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
