import React from 'react'
import travel from '../images/travel.jpg'
const About = () => {
  return (
    <div className='flex flex-col ' id="about">
      <div className="about flex flex-col">
        <div>
          <h1 className="flex justify-center text-5xl mt-44 font-bold text-white">About Us</h1>
        </div>
      </div>
      <div className="flex  mt-5 p-6 ml-20">
        <div className='flex flex-col '>
          <h1 className='text-3xl font-mono'>Who We Are ?</h1>
          <p className='mt-4 w-[50rem] font-serif'>
            Travel isn't always pretty, It isn't always comfortable. We are giving you a chance to explore the world while gaining
            new skills and experiences through work exchange programs.Experience
            the world like a local and make meaningful connections. If you want
            to explore the hilly areas, beaches and various exotic places and do
            not have the money, we have got you covered and are offering a discounted trip with accommodation and food facilities. Join us for
            thrilling experience that will help you discover new places, learn
            new skills, and make unforgettable memories.
          </p>
        </div>
        <div className='w-[50rem] ml-24'>
            <img src={travel} className='w-[20rem]' />
        </div>
      </div>
    </div>
  );
}

export default About