import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
    toggle: JSON.parse(localStorage.getItem("toggle")) || false,
    trailerMovie: [],
    isOpen: false,
    id: "",
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
      localStorage.setItem("toggle", JSON.stringify(state.toggle));
    },
    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
  },
});
export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  setToggle,
  getTrailerMovie,
  setIsOpen,
  getId,
} = movieSlice.actions;
export default movieSlice.reducer;
