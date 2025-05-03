import React, { useEffect, useState } from "react";
import Header from "./Header";
import bgImg from "../assets/bgImg.jpg";
import axios from "axios";
import { API_END_POINT } from "./constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.users.user);
  const isLoading = useSelector((store) => store.users.isLoading);

  useEffect(() => {
    if (user) {
      navigate("/browse", { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (err) {
        console.log(err, "error");
        toast.error(err.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (err) {
        console.log(err, "error");
        toast.error(err.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="relative min-h-screen h-[vh]">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          className="relative inset-0 w-full h-full object-cover brightness-75"
          src={bgImg}
          alt="bg-Img"
        />
      </div>
      <div className="relative min-h-screen flex items-center justify-center">
        <form
          onSubmit={getInputData}
          className="relative z-10 max-w-md w-full px-4 sm:px-8 py-6 sm:py-10 bg-black/80 flex flex-col justify-center gap-4   rounded-md"
        >
          <h1 className="text-white text-3xl font-bold mb-3.5">
            {isLogin ? "LogIn" : "SignUp"}
          </h1>
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="text-white font-semibold border border-b-gray-500 bg-black/25 rounded-md px-4 py-3 w-full"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email "
            className="text-white font-semibold border border-b-gray-500 bg-black/25 rounded-md px-4 py-3 w-full"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="text-white font-semibold border-1 border-b-gray-500 bg-black/25 rounded-md px-4 py-3 w-full"
          />

          <button
            type="submit"
            className="bg-red-600 text-white rounded-md p-1.5 w-full font-semibold cursor-pointer"
          >
            {`${isLoading ? "Loading…" : isLogin ? "LogIn" : "SignUp"}`}
          </button>
          <p className="text-gray-400 text-center font-semibold">OR</p>
          <p className="text-gray-400 text-lg text-center font-semibold">
            {isLogin ? "New to Netflix?" : "Already have an account?"}{" "}
            <span className="text-white cursor-pointer" onClick={handleLogin}>
              {isLogin ? "SignUp Now" : "LogIn"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
