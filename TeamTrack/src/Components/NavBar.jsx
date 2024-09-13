<<<<<<< HEAD
import React from "react";
=======
import React from 'react'
import { Link } from 'react-router-dom'
>>>>>>> 03d6a2bd041f51d7c18404722b564af4fdf668ce

export default function NavBar() {
  return (
    <nav className="flex bg-white w-screen h-[50px] text-[#D65A31]">
      {/* logo */}
      <div className="flex justify-center flex-none w-1/5">
        <h1 className="m-2 font-bold font-righteous text-2xl">
          <a href="">TeamTrack</a>
        </h1>
      </div>

      {/* navbar list */}
      <div className="flex-initial w-3/5">
        <ul className="flex flex-row justify-around m-3">
          <li className="hover:font-semibold">
            <a href="">Features</a>
          </li>
          <li className="hover:font-semibold">
            <a href="">Downloads</a>
          </li>
          <li className="hover:font-semibold">
            <a href="">Docs</a>
          </li>
          <li className="hover:font-semibold">
            <a href="">Support</a>
          </li>
          <li className="hover:font-semibold">
            <a href="">Blog</a>
          </li>
        </ul>
      </div>

      {/* login and profile */}
<<<<<<< HEAD
      <div className="flex justify-center flex-none w-1/5">
        <h1 className="m-3 font-semibold hover:font-bold">
          <a href="">Log In</a>
        </h1>
=======
      <div className='flex justify-center flex-none w-1/5'>
        <h1 className='m-3 font-semibold hover:font-bold'><Link to='/Login-Page'>Log In</Link></h1>
>>>>>>> 03d6a2bd041f51d7c18404722b564af4fdf668ce
      </div>
    </nav>
  );
}
