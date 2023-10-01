// login or signup information

import React from "react";
import { Link } from "react-router-dom";

export default function Getstarted() {
  return (
    <main className="relative top-10 w-full flex items-center justify-center pt-10 mt-32">
      <section className="grid grid-cols-1 place-items-center gap-2 w-[30%]">
        <h1 className="text-[32px] text-[#141414]text-center font-bold">
          Log in or Sign up
        </h1>
        <p className="text-[14px] text-center text-[#434343] font-normal mb-4 w-[80%]">
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>
        <button className="w-full p-2.5 border border-1 outline-none rounded-md bg-white text-[16px] font-medium flex items-center justify-center cursor-pointer mb-3">
          <img src="./images/Google svg.png" alt="" className="mr-3 w-5" />
          Continue with Google
        </button>
        <button className="w-full p-2.5 border border-1 outline-none rounded-md bg-white text-[16px] font-medium flex items-center justify-center cursor-pointer mb-1">
          <img src="./images/Facebook svg.png" alt="" className="mr-3 w-5" />
          Continue with Facebook
        </button>

        <div className="my-4 flex items-center justify-center w-full mb-10">
          <hr className="w-[50%] border-solid border-[#B9C2C8] h-0" />
          <p className="mx-2">or</p>
          <hr className="w-[50%] border-solid border-[#B9C2C8] h-0" />
        </div>

        <form action="" className="w-full grid grid-cols-1 gap-4">
          <label
            htmlFor=""
            className="grid grid-cols-1 gap-1 text-[14px]"
          >
            Email
            <input  type="email" placeholder="Enter your email address" className="p-2.5 rounded-md outline-none border border-[#B9C2C8] border-solid" />
          </label>

          <label
            htmlFor=""
            className="grid grid-cols-1 gap-1 text-[14px]"
          >
            Password
            <input type="password" placeholder="Enter your Password" className="p-2.5 rounded-md outline-none border border-[#B9C2C8] border-solid" />
          </label>

          <Link to="/userrepository" className="p-2.5 mt-2 bg-[#120B48] border border-[#120B48] rounded-md text-[18px] text-white text-center decoration-none cursor-pointer hover:bg-white hover:text-black transition-all">Sign Up</Link>
        </form>
      </section>
    </main>
  );
}
