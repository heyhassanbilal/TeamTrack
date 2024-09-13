import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  let registerToggleShowPassword = () => {
    setShowRegisterPassword(!showRegisterPassword);
  };
  let loginToggleShowPassword = () => {
    setShowLoginPassword(!showLoginPassword);
  };

  return (
    <div className="flex flex-col justify-center h-screen w-screen overflow-hidden">
      {/* Heading */}
      <div>
        <h1 className="text-center font-righteous text-6xl mt-[10vh] mb-11">
          <Link to="/">TeamTrack</Link>
        </h1>
      </div>

      {/* Register and login container */}
      <div className="flex justify-around w-full h-full">
        {/* register */}
        <div className="w-1/3">
          <h1 className="w-2/3 font-bold text-2xl mb-6 ml-[33%]">register</h1>
<<<<<<< HEAD
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-2/3 ml-[33%]"
          >
=======

          {/* Register User Name */}
          <form className="w-2/3 ml-[33%]">
>>>>>>> 03d6a2bd041f51d7c18404722b564af4fdf668ce
            <label htmlFor="register_name" className="text-[#717070]">
              username
            </label>
            <br />
            <input
              className="bg-gray-200 rounded-md h-10 w-56 p-3 mb-4"
              type="text"
              id="register_name"
              name="register_name"
            />
            <br />
            {/* Register User Eamil */}
            <label htmlFor="email" className="text-[#717070]">
              email
            </label>
            <br />
            <input
              type="email"
              className="bg-gray-200 rounded-md h-10 w-56 p-3 mb-4"
              placeholder="example@test.com"
              id="email"
              name="email"
            />
            <br />
            {/* Register Password */}
            <label htmlFor="register_password" className="text-[#717070]">
              password
            </label>
            <br />
            <div className="relative w-56 mb-7">
              <input
                type={showRegisterPassword ? "text" : "password"}
                className="bg-gray-200 rounded-md h-10 w-full p-3 pr-10 focus:outline-none"
                name="register_password"
                id="register_password"
              />
              <i
                onClick={registerToggleShowPassword}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer ${
                  showRegisterPassword ? "far fa-eye-slash" : "far fa-eye"
                }`}
              ></i>
            </div>

            <br />
            {/* Sign Up Button */}
            <button
              type="submit"
              className="bg-black text-white rounded-md px-[4.25rem] py-2 font-bold font-sans text-lg  border-2 border-solid hover:bg-white hover:text-black  hover:border-black transition-all duration-300 ease-in-out"
            >
              <i className="fa-solid  fa-right-to-bracket mr-2"></i>
              sign up
            </button>
          </form>
        </div>

        {/* login */}
        <div className="w-1/3">
          <h1 className="w-2/3 font-bold text-2xl mb-6 ml-[33%]">login</h1>
<<<<<<< HEAD
          <form
            className="w-2/3 ml-[33%]"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="login_name" className="text-[#717070]">
=======
          <form className="w-2/3 ml-[33%]">
            {/* Login UserName/Email */}
            <label htmlFor="login_email" className="text-[#717070]">
>>>>>>> 03d6a2bd041f51d7c18404722b564af4fdf668ce
              username / email
            </label>
            <br />
            <input
              className="bg-gray-200 rounded-md h-10 w-56 mb-4 p-3 "
              type="email"
              id="login_email"
              name="login_email"
            />
            <br />

            {/* Login Password */}
            <label htmlFor="login_password" className="text-[#717070]">
              password
            </label>
            <br />
            <div className="relative w-56">
              <input
                type={showLoginPassword ? "text" : "password"}
                className="bg-gray-200 rounded-md h-10 w-full p-3 pr-10 focus:outline-none"
                name="login_password"
                id="login_password"
              />
              <i
                onClick={loginToggleShowPassword}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer ${
                  showLoginPassword ? "far fa-eye-slash" : "far fa-eye"
                }`}
              ></i>
            </div>
            <br />
            {/* Forgot Password */}
            <p className="mb-7 text-sm underline">
              <a href="">opps i forgot</a>
            </p>
            {/* Google/Github Links */}
            <div className="flex justify-between h-10 w-56 text-lg mb-5">
              <button className="w-1/3 h-full bg-gray-200 rounded-md">
                <i className="fa-brands fa-github"></i>
              </button>

              <button className="w-1/3 h-full bg-gray-200 rounded-md">
                <i className="far fa-brands fa-facebook-f"></i>
              </button>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="bg-black text-white rounded-md px-[5rem] py-2 font-bold font-sans text-lg border-2 border-solid hover:bg-white hover:text-black  hover:border-black transition-all duration-300 ease-in-out"
            >
              <i className="fa-solid fa-right-to-bracket mr-2"></i>
              login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
