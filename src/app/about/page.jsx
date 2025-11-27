"use client"; 

import React, { useEffect, useState } from "react";


export default function page() {
  return (
    <div>
      <div className="h-[300px] bg-cover bg-center pb-20 mt-16 text-center"
               style={{ backgroundImage: "url('/heroImg.jpeg')" }}>
            {/* <img src="/heroImg.jpeg" alt="" /> */}
            <h1 className='text-[#19183B] text-4xl pt-24 font-bold'>
              About LearnWise</h1>
              <p className='max-w-11/12 mx-auto text-[#19183B] text-lg  pt-5 font-semibold'>LearnWise is a modern learning platform designed to make digital marketing education simple, practical, and accessible for everyone.We help students develop real skills through expert-led courses, hands-on projects, and structured learning paths.</p>
      </div>


      {/* vision */}
      <div className='max-w-11/12 mx-auto mt-14 mb-20 '>
      <h1 className='text-[#19183B] text-4xl font-bold text-center'>Our Vision</h1>
      <ul className="mt-5 text-center text-base text-[#19183B] font-semibold">
        <li>To be the leading hub for practical digital skills, inspiring learners to innovate and grow professionally.</li>
        <li>We envision a future where anyone can build a career through accessible, high-quality online training.</li>
        <li>Our vision is to create a global learning community that transforms curiosity into career-ready skills.</li>
        <li>We aim to bridge education and industry with project-based learning and expert mentorship.</li>
        <li>We aspire to empower learners everywhere with the tools and knowledge to succeed in the digital era.</li>
        <li>By focusing on real-world skills, we help students turn learning into meaningful careers.</li>
      </ul>
      
      </div>

      {/* Why Choose Us */}

       <div className='max-w-11/12 mx-auto mt-14 mb-20 '>
      <h1 className='text-[#19183B] text-4xl font-bold text-center'>Why Choose Us</h1>
      <ul className="mt-5 text-center text-base text-[#19183B] font-semibold">
        <li>Expert-led courses with practical projects that build real portfolio work — not just theory.</li>
        <li>Affordable pricing and flexible learning paths make skill-building easy for everyone.</li>
        <li>Industry-focused curriculum designed with current market needs and hiring standards in mind.</li>
        <li>Hands-on assignments, mentor support, and measurable outcomes ensure job-ready learners.</li>
        <li>Personalized learning paths, active student support, and real-world projects to showcase skills.</li>
        <li>High-quality instructors and a community-driven approach accelerate career growth.</li>
      </ul>
      
      </div>
    </div>
  )
}
