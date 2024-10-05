import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
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
          <SignInForm
            SignInAPI={
              "https://teamtrack-api-production-de2a.up.railway.app/auth/sign-up"
            }
          />
        </div>
        {/* login */}
        <div className="w-1/3">
          <h1 className="w-2/3 font-bold text-2xl mb-6 ml-[33%]">login</h1>
          <LogInForm
            LogInAPI={
              "https://teamtrack-api-production-de2a.up.railway.app/auth/log-in"
            }
          />
        </div>
      </div>
    </div>
  );
}

function LogInForm({ LogInAPI }) {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
  });

  let ToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //Loging in User in Backend
  const LoginAccount = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      let UserStatus;
      const response = await fetch(`${LogInAPI}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.userName,
          userPassword: formData.userPassword,
        }),
      });
      UserStatus = await response.text();
      console.log(UserStatus);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form className="w-2/3 ml-[33%]" onSubmit={LoginAccount}>
        {/* Login UserName/Email */}
        <label htmlFor="userName" className="text-[#717070]">
          username / email
        </label>
        <br />
        <input
          className="bg-gray-200 rounded-md h-10 w-56 mb-4 p-3 "
          type="text"
          id="userName"
          name="userName"
          onChange={handleChange}
        />
        <br />

        {/* Login Password */}
        <label htmlFor="userPassword" className="text-[#717070]">
          password
        </label>
        <br />
        <div className="relative w-56">
          <input
            type={showPassword ? "text" : "password"}
            className="bg-gray-200 rounded-md h-10 w-full p-3 pr-10 focus:outline-none"
            name="userPassword"
            id="userPassword"
            onChange={handleChange}
          />
          <i
            onClick={ToggleShowPassword}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer ${
              showPassword ? "far fa-eye-slash" : "far fa-eye"
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
    </>
  );
}

function SignInForm({ SignInAPI }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormData] = useState({
    userName: "",
    userMail: "",
    userPassword: "",
  });
  const [signInMessage, setSignINMessage] = useState("");
  const [userCreationStatus, setuserCreationStatus] = useState("hidden");

  let ToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const RegisterAccount = async (e) => {
    let message;
    e.preventDefault(); // Prevent the default form submission
    const header = {
      header: { "Content-Type": "application/json" },
    };
    try {
      const res = await axios.post(SignInAPI, formdata, header);
      message = res.data.message
      console.log(res);
      console.log(message);
      if (res.status === 201) {
        setuserCreationStatus("w-56 font-semibold text-lime-600  text-center rounded-md p-0 m-0");
        setSignINMessage(message);
      }

      if (res.status === 409) {
        setuserCreationStatus("w-56 text-red-600 font-semibold text-center rounded-md p-0 m-0");
        setSignINMessage(message);
      }
    } catch (err) {
      if(err.status === 409)
      {
        setuserCreationStatus("w-56 text-red-600 font-semibold text-center rounded-md p-0 m-0");
        setSignINMessage(err.response.data.message);
      }
      console.log(err);
    }
  };

  return (
    <>
      <form className="w-2/3 ml-[33%]" onSubmit={RegisterAccount}>
        <label htmlFor="register_name" className="text-[#717070]">
          username
        </label>
        <br />
        <input
          className="bg-gray-200 rounded-md h-10 w-56 p-3 mb-4"
          type="text"
          id="register_name"
          name="userName"
          onChange={handleChange}
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
          name="userMail"
          onChange={handleChange}
        />
        <br />
        {/* Register Password */}
        <label htmlFor="register_password" className="text-[#717070]">
          password
        </label>
        <br />
        <div className="relative w-56 mb-5">
          <input
            type={showPassword ? "text" : "password"}
            className="bg-gray-200 rounded-md h-10 w-full p-3 pr-10 m- focus:outline-none"
            name="userPassword"
            id="register_password"
            onChange={handleChange}
          />
          <i
            onClick={ToggleShowPassword}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer ${
              showPassword ? "far fa-eye-slash" : "far fa-eye"
            }`}
          ></i>
          
        </div>

        <p className={userCreationStatus}>{signInMessage}</p>
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
    </>
  );
}
