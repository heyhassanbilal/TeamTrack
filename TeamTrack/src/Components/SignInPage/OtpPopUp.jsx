import { useEffect, useState } from "react";
import useUserVerification from "../../hooks/useUserVerification";

export default function OtpPopUp({ userMail, setHideRequest }) {
  const { verifyUser, loading, error, success } = useUserVerification();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [notvalid, setNotValid] = useState(false);
  // Handle input change

  useEffect(() => {
    if (success) {
      setHideRequest(true);
    }
  }, [success]);

  useEffect(() => {
    if (error !== null) {
      setNotValid(true);
    } else {
      setNotValid(false);
    }
  }, [error]);

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Move to the next input field automatically
    if (e.target.value && index < 3) {
      document.getElementById(`digit${index + 2}`).focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length != 4) {
      setNotValid(true);
    } else {
      verifyUser(userMail, otpCode);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="flex flex-col bg-slate-700 rounded-lg p-8 shadow-lg max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-lg font-semibold text-center mb-4">
          Verify Your Email
        </h2>
        <label htmlFor="OTP" className="text-white text-sm mb-2" method="post">
          Enter Your 4-digit OTP sent to your email
        </label>
        <div className="flex justify-center space-x-2 mb-4">
          {otp.map((_, index) => (
            <input
              key={index}
              id={`digit${index + 1}`}
              className="w-12 h-12 text-xl font-bold text-center text-gray-700 rounded-md border-2 border-gray-400 focus:outline-none focus:border-orange-500 transition duration-200"
              type="text"
              maxLength="1"
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        <p
          className={
            notvalid ? " pb-2 text-red-500 font-semibold self-center" : "hidden"
          }
        >
          Enter Valid OTP
        </p>
        <button
          className="font-semibold bg-orange-600 rounded-md py-2 hover:bg-orange-900 transition duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
