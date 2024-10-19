import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import SignInForm from "./SigninForm";
import LogInForm from "./LoginForm";
import OtpPopUp from "./OtpPopUp";
export default function LoginPage() {
  const [hideRequest, setHideRequest] = useState(true);
  const [userMail, setUserMail] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookie.token) {
      navigate("/Home-Page");
    }
  });
  useEffect(() => {
    if (userMail !== null) {
      setHideRequest(false);
    } else {
      setHideRequest(true);
    }
  }, [userMail]);

  return (
    <>
      <div
        className={`${!hideRequest ? "blur-md pointer-events-none" : ""} flex flex-col justify-center h-screen w-screen overflow-hidden`}
      >
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
            <h1 className="w-2/3 font-bold text-2xl mb-6 ml-[33%]">Register</h1>
            <SignInForm setUserMail={setUserMail} />
          </div>
          {/* login */}
          <div className="w-1/3">
            <h1 className="w-2/3 font-bold text-2xl mb-6 ml-[33%]">Login</h1>
            <LogInForm
              LogInAPI={
                "https://teamtrack-api-production-de2a.up.railway.app/auth/log-in"
              }
            />
          </div>
        </div>
      </div>
      {!hideRequest ? (
        <div className="fixed inset-0 w-[20rem] h-[20rem] m-auto">
          <OtpPopUp userMail={userMail} setHideRequest={setHideRequest} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
