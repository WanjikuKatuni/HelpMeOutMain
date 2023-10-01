import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineDown} from 'react-icons/ai'

export default function Header() {
  return (
    <nav className='py-5 px-[5%] flex items-center justify-between bg-white fixed w-full z-[5]'>

      <img src="./images/logo-clr.png" alt="" />

      {/* user details */}
      <div className="flex items-center justify-between">
            <FaUserCircle className='inline-block text-[#616163] text-8'/>
            <p className="text-[16px] mx-2 font-normal">John Mark</p>
            <AiOutlineDown className='inline-block text-8 text-[#616163] cursor-pointer'/>
      </div>

      <div className="links text-[16px]">
        <a
            href="#Features"
            className="decoration-none pr-4 text-[#141414] font-medium hover:text-[#887ce2]"
        >
          Features
        </a>
        <a
            href="#HowItWorks"
            className="decoration-none text-[#141414] font-medium hover:text-[#887ce2]"
        >
          How It Works
        </a>
        </div>

        <p className="decoration-none text-[#120B48] text-[18px] font-600">Get started</p>
    </nav>
  )
}
