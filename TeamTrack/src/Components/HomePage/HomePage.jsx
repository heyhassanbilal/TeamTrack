import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { jwtDecode } from "jwt-decode";
import DiscussionPool from "./DiscusionPool";
import { useCookies } from "react-cookie";

export default function HomePage() {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookie.token) {
      navigate("/Login-Page");
    }
  });
  return (
    <>
      <div className="h-screen w-screen overflow-hidden flex">
        <Menu />

        <DiscussionPool />
      </div>
    </>
  );
}
