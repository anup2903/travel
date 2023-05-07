import React from 'react'
import Nav from './Nav';
import About from './About';
import Openings from './Openings';
const Landing = () => {
  return (
    <div>
      <div className="land  ">
        <Nav />
        <div className="flex justify-around">
          <div className="flex flex-col mt-36">
            {/* <h1 className="text-4xl flex  text-blue-50 w-[30rem] p-2">
            Find your <h1 className="text-6xl text-blue-50 p-2">Purpose</h1>{" "}
            <br />
            <h1 className="text-4xl text-blue-50 p-2">and</h1>{" "}
            <h1 className="text-6xl text-blue-50 p-2">Passion</h1>
            <h1 className="text-4xl flex text-blue-50 p-2">through tourism</h1>
          </h1> */}
            <h1 className="text-7xl flex  text-blue-50 w-[30rem] text-left font-semibold">
              Work and travel go hand in hand
            </h1>
            <h2 className="mt-4 text-2xl font-serif w-[30rem] text-gray-100">
              Join us on a journey that changes lives including yours
            </h2>
            <button className="rounded-xl bg-blue-400 p-2 w-28 mt-3 ">
              Get Started
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <About />
      <Openings/>
    </div>
  );
}

export default Landing