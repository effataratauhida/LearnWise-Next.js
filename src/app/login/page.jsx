"use client";

import { useState, useRef } from "react";
import { auth, googleProvider } from "@/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  // Email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#19183B]">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            className="border p-2 rounded w-full"
            required
          />

          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="mt-4 bg-gray-200 text-[#19183B] p-2 rounded w-full cursor-pointer"
        >
          Login with Google
        </button>
         <p className='text-center text-[#19183B] text-base font-medium mt-2'>Don't have an account?{" "}
            
            {/* <Link 
          to='/auth/registration' 
          className='text-red-600 underline'>Register Now</Link> */}
          </p>
      </div>
    </div>
  );
}