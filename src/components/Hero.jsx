"use client"; 

import React, { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRouter } from "next/navigation";



export default function Hero() {

  const [courses, setCourses] = useState([]);
  const router = useRouter();


  useEffect(() => {
    fetch("http://localhost:5000/courseData") 
      .then((res) => res.json())
      .then((data) => setCourses(data.slice(0, 3))) 
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
    <div className="h-[300px] bg-cover bg-center pb-20 mt-16 text-center"
         style={{ backgroundImage: "url('/heroImg.jpeg')" }}>
      {/* <img src="/heroImg.jpeg" alt="" /> */}
      <h1 className='text-[#19183B] text-4xl pt-24 font-bold'>
        LearnWise – Your Gateway to Modern Digital Marketing Skills</h1>
        <p className='text-[#19183B] text-lg  pt-5 font-semibold'>Learn SEO, SMM, Ads and Content Strategy through practical lessons.
             Build the skills you need to grow in real-world digital marketing.</p>

             <div className="flex justify-center mt-4">
                <button onClick={() => router.push("/courses")} 
                 className="bg-[#19183B] flex gap-2 items-center  text-[#E7F2EF] px-6 py-2 rounded border-2 border-[#708993] cursor-pointer mt-2">
            Explore Courses <FaArrowUpRightFromSquare />
          </button>
             </div>
          </div>
 
                 {/* courses */}
             <div className='max-w-11/12 mx-auto mt-10 '>
              

             <h1 className='text-[#19183B] text-4xl font-bold text-center'>Our Courses</h1>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10   ">
                   {courses.map((course) => (
                <div key={course._id} className=" p-4 h-[380px] shadow-lg bg-[#E7F2EF] rounded-sm">
                  <img src={course.image} alt="" className="h-1/2 w-full rounded-sm"/>
              <h2 className="text-xl mt-6 font-bold text-[#19183B]">{course.title}</h2>
              <p className="text-base mt-3 font-semibold text-[#19183B]">Description: <span className="font-medium">{course.short_description}</span></p>
              
              <button className="mt-4 w-full bg-[#19183B] text-[#E7F2EF] px-6 py-2 rounded cursor-pointer ">
                See Details
              </button>
            </div>
          ))}
        </div>

        <button onClick={() => router.push("/courses")} 
         className="mt-10 bg-[#19183B] text-[#E7F2EF] px-6 py-2 rounded cursor-pointer">Show All Courses</button>
             </div> 
            

            {/* Instructor */}
            <div className='max-w-11/12 mx-auto mt-14 mb-20 '>
            <h1 className='text-[#19183B] text-4xl font-bold text-center'>Our Instructors</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10   ">
            
            <div className=" p-4 h-[320px] shadow-lg bg-[#E7F2EF] rounded-sm flex flex-col items-center">
              <h2 className="text-xl text-center font-bold text-[#19183B]">Search Engine Optimization (SEO)</h2>
              <p className="text-base text-center font-medium text-[#19183B] mt-2">Expert SEO strategist with years of experience in optimizing websites for higher search rankings and organic traffic growth.</p>
              <img src="/seo.jpeg" alt="" className="mt-2 rounded-full h-24 w-24 mx-auto"/>
              <h3  className="mt-2 text-xl text-center font-bold text-[#19183B]">John Doe</h3>
              <h3  className="mt-2 text-base text-center font-semibold text-[#19183B]">SEO Specialist</h3>
            </div>

            <div className=" p-4 h-[320px] shadow-lg bg-[#E7F2EF] rounded-sm flex flex-col items-center">
              <h2 className="text-xl text-center font-bold text-[#19183B]">Social Media Marketing</h2>
              <p className="text-base text-center font-medium text-[#19183B] mt-2">Expert SEO strategist with years of experience in optimizing websites for higher search rankings and organic traffic growth.</p>
              <img src="/seo.jpeg" alt="" className="mt-2 rounded-full h-24 w-24 mx-auto"/>
              <h3  className="mt-2 text-xl text-center font-bold text-[#19183B]">Robert Walton</h3>
              <h3  className="mt-2 text-base text-center font-semibold text-[#19183B]">SMM Specialist</h3>
            </div>

            <div className=" p-4 h-[320px] shadow-lg bg-[#E7F2EF] rounded-sm flex flex-col items-center">
              <h2 className="text-xl text-center font-bold text-[#19183B]">Content Marketing & Copywriting</h2>
              <p className="text-base text-center font-medium text-[#19183B] mt-2">Expert SEO strategist with years of experience in optimizing websites for higher search rankings and organic traffic growth.</p>
              <img src="/seo.jpeg" alt="" className="mt-2 rounded-full h-24 w-24 mx-auto"/>
              <h3  className="mt-2 text-xl text-center font-bold text-[#19183B]">William Smith</h3>
              <h3  className="mt-2 text-base text-center font-semibold text-[#19183B]">Content Marketing Specialist</h3>
            </div>
              
            </div>

            </div>

             {/* feedback */}
             
               <div className='max-w-11/12 mx-auto mt-14 mb-20 '>
               <h1 className='text-[#19183B] text-4xl font-bold text-center'>Student's Feedback</h1>
               <h3  className="mt-2 text-base text-center font-semibold text-[#19183B]">See what student's are saying</h3>
               </div>
    </div>
  )
}
