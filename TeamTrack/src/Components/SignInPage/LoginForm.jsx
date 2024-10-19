import { useState } from "react";
import useLogIn from "../../hooks/useLogin";
import  { useNavigate } from "react-router-dom";
export default function LogInForm({ LogInAPI }) {
  const [showPassword, setShowPassword] = useState(false);
  const {logIn, loading, error} = useLogIn();
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
  const LoginAccount = (e) => {
    e.preventDefault(); // Prevent the default form submission

    logIn(formData);

  };
  return (
    <>
      <form className="w-2/3 ml-[33%]" onSubmit={LoginAccount}>
        {/* Login UserName/Email */}
        <label htmlFor="userName" className="text-[#717070]">
          Username
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
          Password
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
        {error && (
          <p className="w-56 text-red-600 font-semibold text-center rounded-md p-0 m-0">
            {error}
          </p>
        )}
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
