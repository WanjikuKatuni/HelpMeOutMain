// list of all of users videos

import React from "react";
// icons
import {CiSearch} from 'react-icons/ci'
import {FiLink2} from 'react-icons/fi'
import {CgMoreVertical} from 'react-icons/cg'
import { Link } from "react-router-dom";

export default function Allvideos() {
  return (
    <main className="w-full relative top-20 py-4 mb-24 mt-10">

        {/* userinfo and search */}
      <section className="flex items-center justify-between mx-[5%]">
        <div>
          <h1 className="text-[32px] text-[#141414] text-center font-bold">
            Hello, John Mark
          </h1>
          <p className="text-[18px] text-[#616163] font-normal">
            Here are your recorded videos
          </p>
        </div>

        <div className="w-[30%] relative">
          <input
            type="Search"
            placeholder="Search for a particular video"
            className="relative py-4 px-8 bg-[#F4F6F8] rounded-md border-none outline-none w-full"
          />
          <CiSearch className="inline-block absolute left-2 top-5 text-[14px] text-[#C3C3C3]" />
        </div>
      </section>

      {/* recent files */}
      <section className="mt-10 border-t-[#C3C3C3] border-2">
        <p className="text-[18px] text-[#616163] mb-4 mx-[5%] mt-5">
          Recent Files
        </p>

        <div className="grid grid-cols-2 gap-4 justify-center mx-[5%]">

          <Link to='/singlevideorepo' className="text-[#141414] border border-solid border-[#C3C3C3] rounded-lg p-5">
            <div>
              <img src="./images/video frame.png" alt="" className="w-full" />
            </div>

            <div className="flex justify-between mt-4 mr-1">
              <div>
                <h3 className="text-[20px]">How to create Facebook Ad listing</h3>
                <p className="text-[#B9C2C8] text-[16px] mt-1">
                  SEPTEMBER 23, 2023
                </p>
              </div>
              <div className="space-x-4">
                <FiLink2 className="inline-block text-[24px] cursor-pointer hover:text-[#616163]" />
                <CgMoreVertical className="inline-block text-[24px] cursor-pointer hover:text-[#616163]" />
              </div>
            </div>
          </Link>

          <Link to='/singlevideorepo' className="text-[#141414] border border-solid border-[#C3C3C3] rounded-lg p-5">
            <div>
              <img src="./images/video frame (1).png" alt="" className="w-full" />
            </div>

            <div className="flex justify-between mt-4 mr-1">
              <div>
                <h3 className="text-[20px]">How to create Facebook Ad listing</h3>
                <p className="text-[#B9C2C8] text-[16px] mt-1">
                  SEPTEMBER 23, 2023
                </p>
              </div>
              <div className="space-x-4">
                <FiLink2 className="inline-block text-[24px] cursor-pointer hover:text-[#616163]" />
                <CgMoreVertical className="inline-block text-[24px] cursor-pointer hover:text-[#616163]" />              
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* last weekes files */}
      <section className="mt-10">
        <p className="text-[18px] text-b[#616163] mb-4 mx-[5%]">
          Files from last week
        </p>

        <div className="grid grid-cols-2 gap-4 justify-center mx-[5%]">

        <Link to="/singlevideorepo" className="text-[#141414] border border-solid border-[#C3C3C3] rounded-lg p-5">
            <div>
              <img src="./images/video frame (2).png" alt="" className="w-full" />
            </div>

            <div className="flex justify-between mt-4 mr-1">
              <div>
                <h3 className="text-[20px]">How to create Facebook Ad listing</h3>
                <p className="text-[#B9C2C8] text-[16px] mt-1">
                  SEPTEMBER 23, 2023
                </p>
              </div>
              <div className="space-x-4">
                <FiLink2 className="inline-block text-[24px] cursor-pointer hover:text-[#616163]" />
                <CgMoreVertical className="inline-block text-[24px] cursor-pointer hover:text-[#616163]" />              
              </div>
            </div>
        </Link>

          <Link to='/singlevideorepo' className="text-[#141414] border border-solid border-[#C3C3C3] rounded-lg p-5">
            <div>
              <img src="./images/video frame (3).png" alt="" className="w-full" />
            </div>

            <div className="flex justify-between mt-4 mr-1">
              <div>
                <h3 className="text-[20px]">How to create Facebook Ad listing</h3>
                <p className="text-[#B9C2C8] text-[16px] mt-1">
                  SEPTEMBER 23, 2023
                </p>
              </div>
              <div className="space-x-4">
                <FiLink2 className="inline-block text-[24px] cursor-pointer hover:text-[#616163]" />
                <CgMoreVertical className="inline-block text-[24px] cursor-pointer hover:text-[#616163]" />              
              </div>
            </div>
          </Link>

        </div>
      </section>
    </main>
  );
}
