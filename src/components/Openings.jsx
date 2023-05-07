import React from 'react'
import store from '../images/shop.jpg'
import tech from '../images/technology.jpg'
import yellowglove from '../images/yellowglove.jpg'
import { Link } from 'react-router-dom';
const Openings = () => {
  return (
    <div className="flex justify-center mt-10 domain" id='open'>
      <div className="pt-10">
        <div className="flex m-4">
          <Link to="/store">
            <div className="shadow-md shadow-grey mx-4 hover:shadow-lg hover:shadow-blue-500/70">
              <img src={store} className="w-[20rem]" />
              <h1>Local Enterprise</h1>
            </div>
          </Link>
          <Link to='/tech'>
            <div className="shadow-md shadow-grey mx-4 hover:shadow-xl hover:shadow-blue-500/70">
              <img src={tech} className="w-[20rem]" />
              <h1>Local Enterprise</h1>
            </div>
          </Link>
        </div>
        <div className="flex mx-4 my-8">
          <div className="shadow-md shadow-grey mx-4 hover:shadow-lg hover:shadow-blue-500/70">
            <img src={yellowglove} className="w-[20rem]" />
            <h1>Local Enterprise</h1>
          </div>
          <div className="shadow-md shadow-grey mx-4 hover:shadow-lg hover:shadow-blue-500/70">
            <img src={store} className="w-[20rem]" />
            <h1>Local Enterprise</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <h1 className="text-5xl mt-10 ">Domains to chose from</h1>
      </div>
    </div>
  );
}

export default Openings