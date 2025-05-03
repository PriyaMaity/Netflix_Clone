import axios from "axios";
import React, { useState } from "react";
import { SEARCH_MOVIE, options } from "../components/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";
import { FaSearch } from "react-icons/fa";

const SearchMovie = () => {
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState("");
  const isLoading = useSelector((store) => store.users.isLoading);
  const { movieName, searchedMovie } = useSelector(
    (store) => store.searchMovie
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${SEARCH_MOVIE}?query=${searchMovie}`,
        options
      );
      console.log(res.data.results, "search-res");
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (err) {
      console.log(err, "error in searching");
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };
  return (
    <>
      <div className="w-full flex justify-center pt-[10%]">
        <form onSubmit={handleSubmit} className="w-3/4 sm:w-1/2">
          <div className="w-full flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-b-lg sm:mt-7 ">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              className="w-full outline-none rounded-md text-lg px-2 "
              type="text"
              placeholder="Search Movie"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-red-600 text-white rounded-md px-4 py-2"
            >
              <FaSearch className="block sm:hidden" />
              <span className="hidden sm:inline">
                {isLoading ? "Loading..." : "Search"}
              </span>
            </button>
          </div>
        </form>
      </div>
      <div
        className="[&_.flex]:flex-wrap 
          [&_.flex]:gap-4
          [&_.flex]:justify-center text-center my-9 bg-black mt-6"
      >
        <MovieList title={movieName} movies={searchedMovie} />
      </div>
    </>
  );
};

export default SearchMovie;
