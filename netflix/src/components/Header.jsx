import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import netflixLogo from "../assets/Logonetflix.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_END_POINT } from "./constants";
import { setUser } from "../redux/userSlice";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";
import { FiLogOut } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const user = useSelector((store) => store.users.user);
  const toggle = useSelector((store) => store.movies.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (err) {
      console.log(err, "error");
    }
  };

  const handleToggle = () => {
    dispatch(setToggle(true));
  };
  return (
    <div className=" absolute z-30 flex w-[100%] items-center justify-between px-4 py-2 sm:px-8 sm:py-3 bg-linear-to-b from-black">
      <img className="w-24 sm:w-36" src={netflixLogo} alt="Netflix-logo" />
      {user && (
        <div className="flex items-center gap-1 sm:gap-1.5">
          <IoIosArrowDropdown size="20px" color="white" />
          <h1 className="text-sm sm:text-base font-medium text-white truncate max-w-[80px] sm:max-w-none">
            {user.fullName}
          </h1>
          <div className=" flex items-center gap-2">
            <button
              onClick={handleLogOut}
              className="bg-red-600 text-white rounded-md px-2 py-1 flex items-center justify-center cursor-pointer"
            >
              <span className="hidden md:block cursor-pointer">LogOut</span>
              <FiLogOut className="block md:hidden cursor-pointer" />
            </button>

            <button
              onClick={handleToggle}
              className="bg-red-600 text-white rounded-md px-2 py-1 flex items-center justify-center cursor-pointer"
            >
              <span className="hidden md:block cursor-pointer">
                {toggle ? "Home" : "Search Movie"}
              </span>
              {toggle ? (
                <FaHome className="block md:hidden" />
              ) : (
                <FaSearch className="block md:hidden" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
