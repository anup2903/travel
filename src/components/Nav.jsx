import React from 'react'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div className="flex justify-around py-5 sticky top-0 bg-gray-800">
      <Link to="/">
        <div className="text-blue-50  text-2xl">WORK & WANDER</div>
      </Link>
      <div className="flex ">
        <ul className="flex">
          <Link to="/">
            <li className="mx-5 text-blue-50 text-2xl">Home</li>
          </Link>
          <a style={{ textDecoration: "none" }} href="#about">
            <li className="mx-5 text-blue-50 text-2xl">About</li>
          </a>
          <a style={{ textDecoration: "none" }} href="#open">
            <li className="mx-5 text-blue-50 text-2xl">Openings</li>
          </a>
          <li className="mx-5 text-blue-50 text-2xl">Contact Us</li>
        </ul>
      </div>
      <div>
        <Link to="/Login">
          <button className="mx-5 rounded-2xl bg-blue-400 px-4 py-1 text-2xl">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav