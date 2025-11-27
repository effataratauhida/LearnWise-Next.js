"use client"; // Next.js App Router e client-side component

import { useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#E7F2EF] text-[#19183B] fixed w-full z-20 top-0 left-0 ">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="font-bold text-2xl">LearnWise</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:space-x-8 items-center text-base font-semibold">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>

          {/* Login button */}
          <div className="hidden md:flex">
            <Link href="/login"
             className="bg-[#19183B] text-[#E7F2EF] font-semibold px-6 py-2 rounded-sm hover:bg-white hover:border-[#19183B] hover:border-2 hover:text-[#19183B] cursor-pointer">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#E7F2EF] font-semibold px-2 pt-2 pb-3 space-y-1 flex flex-col">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/courses" className="hover:underline">Courses</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/login"
           className="bg-[#19183B] text-[#E7F2EF] px-4 py-2 rounded hover:bg-[#A1C2BD] hover:border-[#19183B] hover:border-2 hover:text-[#19183B] cursor-pointer mt-2">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
