import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { getId, setIsOpen } from "../redux/movieSlice";

const VideoTitle = ({ movie_id, title, overview }) => {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(getId(movie_id));
    dispatch(setIsOpen(true));
  };

  const handleWatchMore = () => {
    document
      .getElementById("movie-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="text-white bg-gradient-to-t from-black/80  group absolute inset-x-0 bottom-0 px-4 sm:px-12 pb-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="max-w-full sm:max-w-md lg:max-w-lg mt-2 text-sm sm:text-base">
        {overview}
      </p>
      <div className="flex gap-4 mt-6 ">
        <button
          onClick={handlePlay}
          className="flex items-center gap-2 px-4 py-2 text-black bg-white rounded-md hover:opacity-80 cursor-pointer"
        >
          <FaPlay />
          <span className="hidden sm:inline">Play</span>
        </button>
        <button
          onClick={handleWatchMore}
          className="flex items-center gap-2 px-4 py-2 text-white bg-gray-500 opacity-90 rounded-md hover:opacity-80 cursor-pointer"
        >
          <FaCircleInfo />
          <span className="hidden sm:inline">Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
