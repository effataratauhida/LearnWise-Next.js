
"use client";
import { useEffect, useState } from "react";

export default function page() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courseData")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="mt-16 max-w-11/12 mx-auto">
      <h1 className="text-[#19183B] text-4xl font-bold pt-10 text-center">All Courses</h1>
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
    </div>
  );
}
