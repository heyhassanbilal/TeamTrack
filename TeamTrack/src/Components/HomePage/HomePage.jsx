import React from "react";
import Menu from "./Menu";
import DiscussionPool from "./DiscusionPool";

export default function HomePage() {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden flex">
        <Menu />

        <DiscussionPool />
      </div>
    </>
  );
}
