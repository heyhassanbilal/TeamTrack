// src/hooks/useUserVerification.js
import { useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const useUserVerification = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  const verifyUser = async (userMail, userOTP) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://teamtrack-api-production-de2a.up.railway.app/auth/verify-confirmation",
        { userMail: userMail, userOtp: userOTP }
      );
      setSuccess(true);
      setCookie("token", response.data.token, {
        path: "/",
        expires: new Date(jwtDecode(response.data.token).exp * 1000), // Convert exp to milliseconds
      });
    } catch (err) {
      setSuccess(false);
      if (err.response) {
        setError(err.response.data.message || "Login failed.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };
  return { verifyUser, loading, error, success }; // Ensure this line is correct
};

export default useUserVerification;
