"use client";
import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const AuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="relative w-[768px] max-w-full min-h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">

        {/* Forms Container */}
        <div
          className={`absolute w-full h-full flex transition-transform duration-500 ${isSignUp ? "translate-x-[100]" : "translate-x-0"}`}
        >
          {/* Sign In Form */}
          <div className="w-1/2 flex flex-col items-center justify-center px-10">
            <h1 className="text-2xl font-bold text-gray-700 dark:text-white">Sign In</h1>
            <div className="mt-4 flex gap-3 text-gray-600 dark:text-gray-300">
              {[FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn].map((Icon, index) => (
                <span key={index} className="cursor-pointer rounded-full bg-gray-100 p-3 dark:bg-gray-700 hover:scale-105 transition-transform">
                  <Icon size={20} />
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">Use your email and password</p>
            <input type="email" placeholder="Email" className="mt-3 w-full rounded-md border p-2 dark:bg-gray-700 dark:text-white" />
            <input type="password" placeholder="Password" className="mt-2 w-full rounded-md border p-2 dark:bg-gray-700 dark:text-white" />
            <a href="#" className="mt-2 text-sm text-gray-500 hover:underline">Forgot Your Password?</a>
            <button className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white transition-all hover:bg-blue-600">
              Sign In
            </button>
          </div>

          {/* Sign Up Form */}
          <div className="w-1/2 flex flex-col items-center justify-center px-10">
            <h1 className="text-2xl font-bold text-gray-700 dark:text-white">Create Account</h1>
            <div className="mt-4 flex gap-3 text-gray-600 dark:text-gray-300">
              {[FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn].map((Icon, index) => (
                <span key={index} className="cursor-pointer rounded-full bg-gray-100 p-3 dark:bg-gray-700 hover:scale-105 ">
                  <Icon size={20} />
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">Use your email for registration</p>
            <input type="text" placeholder="Name" className="mt-3 w-full rounded-md border p-2 dark:bg-gray-700 dark:text-white" />
            <input type="email" placeholder="Email" className="mt-2 w-full rounded-md border p-2 dark:bg-gray-700 dark:text-white" />
            <input type="password" placeholder="Password" className="mt-2 w-full rounded-md border p-2 dark:bg-gray-700 dark:text-white" />
            <button className="mt-4 w-full rounded-md bg-blue-500 p-2 text-white transition-all hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        </div>

        {/* Toggle Panel */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white transition-transform duration-500 ${isSignUp ? "translate-x-[-100%]" : "translate-x-0"}`}>
          <div className="text-center px-10">
            <h1 className="text-2xl font-bold">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h1>
            <p className="mt-2 text-sm">
              {isSignUp ? "Already have an account? Sign in now." : "Don't have an account? Sign up now."}
            </p>
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="mt-4 w-32 rounded-full bg-white text-blue-600 px-4 py-2 font-semibold transition-all hover:bg-gray-200"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
