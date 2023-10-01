import React from "react";
// icons
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

import { Link, useLocation } from "react-router-dom";


export default function Header() {

  const location = useLocation();

  // Check if the current route is "/Auth" or "/Repo"
  const isAuthenticationRoute = location.pathname === "/authentication";
  const isUserRepoRoute = location.pathname === "/userrepository";
  const isSingleVideoRepoRoute = location.pathname === "/singlevideorepo";

  return (
    <nav
      className={`py-5 px-[5%] flex items-center justify-between bg-white fixed w-full z-5 ${
        isAuthenticationRoute || isUserRepoRoute || isSingleVideoRepoRoute ? "" : "shadow-md"
      }`}
    >
      <Link to="/">
        <img src="./images/logo-clr.png" alt="" />
      </Link>

      {(isUserRepoRoute || isSingleVideoRepoRoute) && (
        <div className="flex items-center justify-between">
          <FaUserCircle className="inline-block w-[30px] h-[30px] text-[#616163]" />
          <p className="text-[16px] mx-2">John Mark</p>
          <AiOutlineDown className="inline-block text-8 text-[#616163] cursor-pointer" />
        </div>
      )}

      {!isAuthenticationRoute && !isUserRepoRoute && !isSingleVideoRepoRoute && (
        <div className="links">
          <a
            href="#Features"
            className="no-underline pr-4 text-[#141414] font-medium hover:text-blue-700 transition-all transition-1"
          >
            Features
          </a>
          <a
            href="#HowItWorks"
            className="no-underline pr-4 text-[#141414] font-medium hover:text-blue-700 transition-all transition-1"
          >
            How It Works
          </a>
        </div>
      )}

      {!isAuthenticationRoute && !isUserRepoRoute && !isSingleVideoRepoRoute && (

        <Link
          to="/authentication"
          className="decoration-none text-blue-700 text-5 font-[700]"
        >
          Get Started
        </Link>
      )}
    </nav>
  );
}
