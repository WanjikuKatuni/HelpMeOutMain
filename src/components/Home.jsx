import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

export default function 
() {
  return (
    <main className="bg-[#F4F6F8] relative top-20 z-1 mt-6">
            {/* start */}
            <section className="px-[5%] py-20 grid grid-cols-2 gap-4 bg-white">

                {/* left */}
                <div className='mt-[300px]'>
                    <h1 className="text-[#141414] font-bold text-[64px] leading-[64px]">Show Them <br />
                    Don’t Just Tell</h1>
                    <p className="mt-4 text-[20px] font-normal text-[#000000bf] max-w-[65%]">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                    <button className="p-3 bg-[#120B48] text-white text-[18px] border border-1 border-[#120B48] outline-none rounded-lg mt-8 flex items-center justify-center cursor-pointer  hover:bg-white hover:text-black transition-all transition-1">Install HelpMeOut 
                    <BsArrowRight className="inline-block text-5 ml-2"/>
                    </button>
                </div>

                {/* right */}
                <div className="grid grid-cols-2 gap-1 mt-32">
                    {/* left images */}
                    <div className="flex flex-col items-center space-y-14 justify-center">
                        <div className="relative">
                            <img src="./images/Frame1.png" alt="" className="w-full"/>
                        </div>
                        <div className="relative">
                            <img src="./images/Frame2.png" alt="" className="w-full relative z-40"/>
                            <img src="./images/grid1.png" alt="" className="absolute right-10 top-[-20px] z-0 w-full"/>
                        </div>
                    </div>

                    {/* right images */}
                    <div className="relative">
                        <img src="./images/Frame3.png" alt="" className="w-full relative z-40"/>
                        <img src="./images/grid2.png" alt="" className="absolute z-0 left-14 top-[-80px] w-full"/>
                    </div>

                </div>
            </section>

            {/* features */}
            <section className="bg-white px-[5%] py-12 my-16" id="Features">
                <h1 className="text-[40px] text-[#141414] text-center font-bold mb-2">Features</h1>
                <p className="text-[20px] text-center text-[#616163] mb-8">Key Highlights of Our Extension</p>

                <div className="grid grid-cols-2 gap-4 pb-10 mt-20">
                    {/* feature description */}
                    <div>
                        <div className="flex items-start gap-4">
                            <img src="./images/Icon placeholder.png" alt="" />
                            <div className="mb-8">
                                <h2 className="text-[28px] font-semibold text-[#1B233D] mb-2">Simple Screen Recording</h2>
                                <p className="text-[20px] text-[#616163] max-w-[75%]">Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <img src="./images/Icon placeholder (1).png" alt="" />
                            <div className="mb-8">
                                <h2 className="text-[28px] font-semibold text-[#1B233D] mb-2">Easy-to-Share URL</h2>
                                <p className="text-[20px] text-[#616163] max-w-[75%]">Share your recordings instantly with a single link. No attachments, no downloads.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <img src="./images/Icon placeholder (2).png" alt="" />
                            <div>
                                <h2 className="text-[28px] font-semibold text-[#1B233D] mb-2">Revisit Recordings</h2>
                                <p className="text-[20px] text-[#616163] max-w-[75%]">Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                            </div>
                        </div>
                    </div>

                    {/* features image */}
                    <div>
                        <img src="./images/Video Repository.png" alt=""  className="w-full h-full"/>
                    </div>
                </div>
            </section>


            {/* how it works section */}
            <section className="bg-white px-[5%] py-12 my-16" id="HowItWorks">
                <h1 className="text-[40px] font-bold text-[#141414] text-center mt-10 mb-10">How it works</h1>

                <div className="grid grid-cols-3 place-items-center">
                    <div className="text-center p-4">
                        <span className="text-[32px] text-center font-bold bg-[#120B48] text-white py-2 px-5 rounded-[100%]">1</span>
                        <h2 className="text-[28px] text-[#1B233D] font-semibold mt-10">Record Screen</h2>
                        <p className="text-[20px] leading-[30.26px] text-[#616163] my-4">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                        <div>
                            <img src="./images/screen.png" alt="" className="w-full"/>
                        </div>
                    </div>

                    <div className="text-center p-4">
                        <span className="text-[32px] text-center font-bold bg-[#120B48] text-white py-2 px-5 rounded-[100%]">2</span>
                        <h2 className="text-[28px] text-[#1B233D] font-semibold mt-10">Share Your Recording</h2>
                        <p className="text-[20px] leading-[30.26px] text-[#616163] my-4">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                        <div>
                            <img src="./images/screen.png" alt="" className="w-full"/>
                        </div>
                    </div>

                    <div className="text-center p-4">
                        <span className="text-[32px] text-center font-bold bg-[#120B48] text-white py-2 px-5 rounded-[100%]">3</span>
                        <h2 className="text-[28px] text-[#1B233D] font-semibold mt-10">Learn Effortlessly</h2>
                        <p className="text-[20px] leading-[30.26px] text-[#616163] my-4">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                        <div>
                            <img src="./images/screen.png" alt="" className="w-full"/>
                        </div>
                    </div>
                </div>

            </section>
        </main>
  )
}
