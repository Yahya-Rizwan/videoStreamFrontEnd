import { Link, useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Logo from "./Logo.jsx";

import { logOut } from "../services/auth.js";
import { useState } from "react";
import { MdOutlineVideoCall } from "react-icons/md";
import { useDispatch } from "react-redux";

function Header({ username, avatar, onSearch }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    } else {
      // Default behavior could be navigating to a search results page
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleLogout = async () => {
    dispatch(logOut())
    navigate("/login");
  };

  return (
    <div className="flex flex-row justify-between items-center mt-3 p-2 h-10 mb-3">
      <div className="pl-2">
        <Link to="/"><Logo className="w-14" /></Link>
      </div>
      <div className="flex flex-row items-center">
        <Input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="xl:w-96 sm:w-80 min-[320px]:w-36 h-10 px-4 shadow-lg rounded-l-full text-lg border-2 bg-neutral-900 border-neutral-800 font-semibold"
        />
        <Button
          className="w-12 h-10 font-semibold p-1 px-3 rounded-r-full text-white bg-neutral-800 text-lg"
          buttonText="Go"
          onClick={handleSearch}
        />
      </div>
      <div className="flex flex-row items-center gap-3">
        {username ? (
          <div className="flex flex-row items-center">
            <div className="w-fit h-fit mr-2 cursor-pointer">
              <Link to="/uploadVideo">
                <MdOutlineVideoCall className="text-4xl text-white" />
              </Link>
            </div>
            <Link to="/user" className="flex items-center">
              <img
                className="w-14 h-fit rounded-full"
                src={avatar}
                alt={`${username}'s avatar`}
              />
            </Link>
            <Button
              className="text-blue-800 font-semibold"
              buttonText="Sign Out"
              onClick={handleLogout}
            />
          </div>
        ) : (
          <Link to="/login" className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              alt="Sign In"
            />
            <Button
              className="text-blue-800 font-semibold"
              buttonText="Sign In"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;