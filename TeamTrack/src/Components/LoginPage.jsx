import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  let toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
          <form className="w-2/3 ml-[33%]">
            <label htmlFor="register_name" className="text-[#717070]">
              username
            </label>
            <br />
            <input
              className="bg-[#DADADA] rounded-md h-10 w-56 p-1 mb-4"
              type="text"
              id="register_name"
              name="register_name"
            />
            <br />

            <label htmlFor="lname" className="text-[#717070]">
              email
            </label>
            <br />
            <input
              type="email"
              className="bg-[#DADADA] rounded-md h-10 w-56 p-1 mb-4"
              placeholder="example@test.com"
              id="lname"
              name="lname"
            />
            <br />

            <label htmlFor="register_name" className="text-[#717070]">
              password
            </label>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              className="bg-[#DADADA] rounded-md h-10 w-56 mb-7 p-1"
              name="register_name"
            />
            <i
              onClick={toggleShowPassword}
              className={
                showPassword
                  ? "far fa-eye-slash m-[-30px] cursor-pointer"
                  : "far fa-eye m-[-30px] cursor-pointer"
              }
            ></i>
            <br />

            <button
              type="submit"
              className="bg-black text-white rounded-md px-[4.25rem] py-2 font-bold font-sans text-lg"
            >
              <i className="fa-solid  fa-right-to-bracket mr-2"></i>
              sign up
            </button>
          </form>
        </div>
        {/* login */}
        <div className="w-1/3">
          <h1 className="w-2/3 font-bold text-2xl mb-6 ml-[33%]">login</h1>
          <form className="w-2/3 ml-[33%]">
            <label htmlFor="login_name" className="text-[#717070]">
              username / email
            </label>
            <br />
            <input
              className="bg-[#DADADA] rounded-md h-10 w-56 mb-4 p-1 "
              type="text"
              id="login_name"
              name="login_name"
            />
            <br />

            <label htmlFor="login_name" className="text-[#717070]">
              password
            </label>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              className="bg-[#DADADA] rounded-md h-10 w-56 p-1"
              name="login_name"
            />
            <i
              onClick={toggleShowPassword}
              className={
                showPassword
                  ? "far fa-eye-slash m-[-30px] cursor-pointer"
                  : "far fa-eye m-[-30px] cursor-pointer"
              }
            ></i>
            <br />

            <p className="mb-7 text-sm underline">
              <a href="">opps i forgot</a>
            </p>

            <div className="flex justify-between h-10 w-56 text-lg mb-5">
              <button className="w-1/3 h-full bg-[#DADADA] rounded-md">
                <i className="fa-brands fa-github"></i>
              </button>

              <button className="w-1/3 h-full bg-[#DADADA] rounded-md">
                <i className="far fa-brands fa-facebook-f"></i>
              </button>
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-md px-[5rem] py-2 font-bold font-sans text-lg"
            >
              <i className="fa-solid  fa-right-to-bracket mr-2"></i>
              login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
