import React from "react";
import { posterUrl } from "./constants";
import { useDispatch } from "react-redux";
import { getId, setIsOpen } from "../redux/movieSlice";

const MovieCard = ({ poster_path, movie_id }) => {
  const dispatch = useDispatch();

  if (poster_path == null) return null;

  const handleOpen = () => {
    dispatch(getId(movie_id));
    dispatch(setIsOpen(true));
  };
  return (
    <div
      className="w-24 sm:w-32 md:w-40 flex-shrink-0 cursor-pointer"
      onClick={handleOpen}
    >
      <img src={`${posterUrl}/${poster_path}`} />
    </div>
  );
};

export default MovieCard;
