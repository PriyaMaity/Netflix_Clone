import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import nowPlayingMovies from "../Hooks/useNowPlayingMovies";
import popularMovies from "../Hooks/usePopularMovies";
import topRatedMovies from "../Hooks/useTopRatedMovies";
import upComingMovies from "../Hooks/useUpcomingMovies";
import SearchMovie from "./SearchMovie";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.users.user);
  const toggle = useSelector((store) => store.movies.toggle);

  nowPlayingMovies();
  popularMovies();
  topRatedMovies();
  upComingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
