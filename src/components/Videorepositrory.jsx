import React from "react";
import {FaRegEdit} from 'react-icons/fa'
import {FiCopy} from 'react-icons/fi'

export default function Videorepositrory() {
  return (
    <div>
      <main className="w-full relative top-20 px-[5%] py-4 mt-10">
        <section className="flex items-center gap-2 mb-5 [&>a]:text-[#141414] [&>a]:text-4 [&>a]:text-[18px]">
          <a
            href=""
            className="hover:text-blue-800 hover:font-[600] transition-all no-underline"
          >
            Home /
          </a>
          <a
            href=""
            className="hover:text-blue-800 hover:font-[600] transition-all no-underline"
          >
            Recent Videos /
          </a>
          <a href="" className="text-black hover:text-blue-800 font-[600] no-underline">
            How To Create A Facebook Ad Listing
          </a>
        </section>

        <section className="w-full">
          <div className="flex items-center text-center gap-4 mb-5">
            <h3 className="text-[24px] font-[600px]">How To Create A Facebook Ad Listing </h3>
            <FaRegEdit className="inline-block text-5 cursor-pointer text-[#120B48]" />
          </div>

          <div className="w-full h-[100%] border-[#F4F6F8] border-solid border-2 rounded-3xl p-4 mb-5">
            <img
              src="./images/videorepoframe.png"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="flex items-center justify-between">

            {/* EMAIL */}
            <div className="w-[40%] relative">
              <input
                type="email"
                className="relative py-4 pl-4 pr-10 bg-[#F4F6F8] rounded-xl border-none outline-none w-full"
                placeholder="enter email of receiver"
              />
              <button className="absolute right-3 top-2 p-2 rounded-lg bg-[#605C84] opacity-50 border-none outline-none text-[16px] text-white cursor-pointer">
                Send
              </button>
            </div>

            {/* URL */}
            <div className="w-[50%] flex items-center justify-between relative p-4 bg-[#F4F6F8] rounded-md border-2 border-[#DADADA] outline-none">
              <p className="text-[16px] text-[#4B4B4B]">
                https://www.helpmeout/Untitled_Video_20232509
              </p>
              <div className="text-[16px] flex items-center gap-2 border border-solid border-[#141414] border-1 rounded-md cursor-pointer absolute right-3 top-2 p-1">
                <FiCopy className="inline-block" />
                <p>Copy URL</p>
              </div>
            </div>
          </div>

          <div className="py-8">
            <h4>Share your video</h4>
            <div className="py-2 flex items-center gap-4 mt-2">
              <button className="py-2 px-3 border border-[#141414] border-1 border-solid outline-none rounded-md bg-white flex items-center cursor-pointer">
              
                <img src="./images/Facebook svg.png" className="w-4 mr-2" />
                Facebook
              </button>
              <button className="py-2 px-3 border border-[#141414] border-1 border-solid outline-none rounded-md bg-white flex items-center cursor-pointer">
                <img
                  src="./images/Whatsapp.png"
                  className="w-3 mr-2"
                /> Whatsapp
              </button>
              <button className="py-2 px-3 border border-[#141414] border-1 border-solid outline-none rounded-md bg-white flex items-center cursor-pointer">
                
                <img src="./images/Telegram.png" className="w-4 mr-2" /> Telegram
              </button>
            </div>
          </div>

          <div className="my-2">
            <h4>Transcript</h4>

            <select
              name=""
              id=""
              className="py-1.5 px-3 rounded-sm outline-none mt-4"
            >
              <option value="">English</option>
              <option value="">Igbo</option>
              <option value="">Spanish</option>
              <option value="">Dutch</option>
            </select>
          </div>

          <div className="mt-10 mb-4 flex gap-8">
            <div>
              <div className="flex gap-4 py-4">
                <h4>0.01</h4>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the First step. Open Facebook on your desktop or mobile device
                  and locate "Marketplace" in the left-hand menu or at the top
                  of the
                </p>
              </div>

              <div className="flex gap-4 py-4">
                <h4>0.15</h4>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the . Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-ha
                </p>
              </div>
              <div className="flex gap-4 py-4">
                <h4>0.30</h4>
                <p>
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the
                </p>
              </div>
              <div className="flex gap-4 pt-4 mb-2">
                <h4 className="text-[#616163]">1.00</h4>
                <p className="text-[#616163]">
                  First step. Open Facebook on your desktop or mobile device and
                  locate "Marketplace" in the left-hand menu or at the top of
                  the{" "}
                </p>
              </div>
            </div>

            <div>
              <img src="./images/scroller.png" className="h-80" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
