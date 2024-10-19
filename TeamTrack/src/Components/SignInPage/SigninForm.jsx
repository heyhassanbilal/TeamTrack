import { useEffect, useRef, useState } from "react";
import useSignIn from "../../hooks/useSignIn";

function SignInForm({ setUserMail }) {
  const { signIn, loading, error, message, success } = useSignIn();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    userMail: "",
    userPassword: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    userName: "",
    userMail: "",
    userPassword: "",
  });

  const [touched, setTouched] = useState({
    userName: false,
    userMail: false,
    userPassword: false,
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };
  //send userMail for verification
  useEffect(() => {
    if (success === true) setUserMail(formData.userMail);
  }, [success]);

  // Form Validation
  useEffect(() => {
    const formatErrors = {};
    // Username Validation
    if (touched.userName) {
      if (formData.userName.length > 15) {
        formatErrors.userName = "Username is too long (maximum 10 characters).";
      } else if (formData.userName.length < 5) {
        formatErrors.userName = "Username is too short (minimum 5 characters).";
      }
    }

    // Email Validation (Basic Example)
    if (touched.userMail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.userMail)) {
        formatErrors.userMail = "Invalid email format.";
      }
    }

    // Password Validation
    if (touched.userPassword) {
      if (formData.userPassword.length > 15) {
        formatErrors.userPassword =
          "Password is too long (maximum 10 characters).";
      } else if (formData.userPassword.length < 5) {
        formatErrors.userPassword =
          "Password is too short (minimum 5 characters).";
      }
    }

    setValidationErrors(formatErrors);
  }, [formData]);

  const handleRegister = (e) => {
    e.preventDefault();
    // Check for validation formatErrors before submitting
    if (
      validationErrors.userName ||
      validationErrors.userMail ||
      validationErrors.userPassword
    ) {
      return;
    }
    signIn(formData);

  };

  return (
    <>
      <form className="w-2/3 ml-[33%]" onSubmit={handleRegister}>
        {/* Username */}
        <label htmlFor="register_name" className="text-[#717070]">
          Username
        </label>
        <br />
        <input
          className="bg-gray-200 rounded-md h-10 w-56 p-3 mb-1"
          type="text"
          id="register_name"
          name="userName"
          onChange={handleChange}
          onBlur={() => {
            setTouched({ ...touched, userName: false });
          }}
          required
        />
        {validationErrors.userName && (
          <p className="text-red-600 w-56">{validationErrors.userName}</p>
        )}
        <br />

        {/* Email */}
        <label htmlFor="email" className="text-[#717070]">
          Email
        </label>
        <br />
        <input
          type="email"
          className="bg-gray-200 rounded-md h-10 w-56 p-3 mb-1"
          placeholder="example@test.com"
          id="email"
          name="userMail"
          onChange={handleChange}
          onBlur={() => {
            setTouched({ ...touched, userMail: false });
          }}
          required
        />
        {validationErrors.userMail && (
          <p className="text-red-600 w-56">{validationErrors.userMail}</p>
        )}
        <br />

        {/* Password */}
        <label htmlFor="register_password" className="text-[#717070]">
          Password
        </label>
        <br />
        <div className="relative w-56 mb-1">
          <input
            type={showPassword ? "text" : "password"}
            className="bg-gray-200 rounded-md h-10 w-full p-3 pr-10 focus:outline-none"
            name="userPassword"
            id="register_password"
            onChange={handleChange}
            onBlur={() => {
              setTouched({ ...touched, userPassword: false });
            }}
            required
          />
          <i
            onClick={toggleShowPassword}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer ${
              showPassword ? "far fa-eye-slash" : "far fa-eye"
            }`}
          ></i>
        </div>
        {validationErrors.userPassword && (
          <p className="text-red-600 w-56">{validationErrors.userPassword}</p>
        )}

        {/* Feedback Message */}
        {message && (
          <p className="w-56 font-semibold text-lime-600 text-center rounded-md p-0 m-0">
            User Created Successfully!
          </p>
        )}
        {error && (
          <p className="w-56 text-red-600 font-semibold text-center rounded-md p-0 m-0">
            {error}
          </p>
        )}

        <br />

        {/* Sign Up Button */}
        <button
          type="submit"
          disabled={loading}
          className={`bg-black text-white rounded-md px-[4.25rem] py-2 font-bold font-sans text-lg border-2 border-solid hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <i className="fa-solid fa-right-to-bracket mr-2"></i>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </>
  );
}

export default SignInForm;
