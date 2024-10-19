// src/hooks/useSignIn.js
import { useState } from "react";
import axios from "axios";

const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const signIn = async (userData) => {
    setLoading(true);
    setError(null);
    setMessage("");

    try {
      const response = await axios.post(
        "https://teamtrack-api-production-de2a.up.railway.app/auth/sign-up",
        userData
      );
      if (response.status === 201) {
        setMessage(response.data.message || "Registration success!");
        setSuccess(true);
      }
    } catch (err) {
      setSuccess(false);
      if (err.response) {
        setError(err.response.data.message || "Registration failed.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading, error, message, success };
};

export default useSignIn;
