import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="md:py-16">
      <div className="flex bg-white rounded-md overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: "url('/assets/clothes.avif')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <p className="text-4xl text-gray-800 text-center">Welcome back!</p>
          <div className="mt-12">
            <label className="block text-primary text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="bg-gray-100 text-primary focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-primary text-sm font-bold mb-2">
                Password
              </label>
              <Link href="/forgot-password" className="text-xs text-gray-500">
                Forget Password?
              </Link>
            </div>
            <input
              className="bg-gray-100 text-primary focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div className="mt-8">
            <button className="bg-brandcolor text-white font-bold py-2 px-4 w-full rounded hover:bg-brandcolor/70">
              Login
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link href="/sign-up" className="text-xs text-gray-500 uppercase">
              or sign up
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
