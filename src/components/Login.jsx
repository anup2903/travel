import React from 'react'
import Nav from './Nav'
const Login = () => {
  return (
    <div className="log">
      <Nav />
      <div className="flex  mt-20 border-solid w-80 ml-16 bg-green-400 rounded-md p-0">
        <div className=" flex flex-col justify-center p-10">
          <h1 className=" font-pixels text-4xl text-zinc-50">
            Create a new account
          </h1>
          <div className="flex">
            <h3 className="mt-4 text-white font-serif">Already a member?</h3>

            <h3 className="mt-4 ml-1 text-blue-400 font-bold cursor-pointer">
              Log In
            </h3>
          </div>
          <div className="mt-2">
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your Email Id"
                className=" w-60 rounded-xl p-2 mt-4 bg-slate-300"
              />

              <input
                type="password"
                placeholder="Enter your Password"
                className=" w-60 rounded-xl p-2 mt-4 bg-slate-300"
              />
              <button
                type="submit"
                className="log1but mt-4 rounded-xl button w-60 justify-center p-2 bg-blue-300"
              >
                Create Account
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login