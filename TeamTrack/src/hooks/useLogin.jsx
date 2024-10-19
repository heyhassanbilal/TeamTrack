// src/hooks/useLogIn.js
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const useLogIn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const logIn = async ({ userName, userPassword }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://teamtrack-api-production-de2a.up.railway.app/auth/log-in",
        { userName, userPassword }
      );
      if (response.status === 200) {
        setSuccess(true);
        console.log(response)
        setCookie("token", response.data.token, {
          path: "/",
          expires: new Date(jwtDecode(response.data.message).exp * 1000), // Convert exp to milliseconds
        });
        navigate("/Home-Page");
      }
    } catch (err) {
      if (err.response) {
        console.log(err)
        setError(err.response.data.message || "Login failed.");
      } else {
        console.log(err)
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { logIn, loading, error };
};

export default useLogIn;
