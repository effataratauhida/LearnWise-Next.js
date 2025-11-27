import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export default function Hero() {
  return (
    <div className="h-[300px] bg-cover bg-center mt-16 text-center"
  style={{ backgroundImage: "url('/heroImg.jpeg')" }}>
      {/* <img src="/heroImg.jpeg" alt="" /> */}
      <h1 className='text-[#19183B] text-4xl pt-24 font-bold'>
        LearnWise – Your Gateway to Modern Digital Marketing Skills</h1>
        <p className='text-[#19183B] text-lg  pt-5 font-semibold'>Learn SEO, SMM, Ads and Content Strategy through practical lessons.
             Build the skills you need to grow in real-world digital marketing.</p>

             <div className="flex justify-center mt-4">
                <button className="bg-[#19183B] flex gap-2 items-center  text-[#E7F2EF] px-6 py-2 rounded border-2 border-[#708993] cursor-pointer mt-2">
            Explore Courses <FaArrowUpRightFromSquare />
          </button>
             </div>
             
    </div>
  )
}
