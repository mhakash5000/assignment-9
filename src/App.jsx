import { useState } from 'react'
import './App.css'
import user from './assets/Images/ak.jpg';

function App() {
 
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap:6 my-10 items-center">
      <div className="text-justify me-3">
        <p className="text-3xl font-bold">
          One Step
          <span className="text-blue-400"> Dream Job</span>
        </p>
        <p className="text-3xl font-bold">Closer To Your</p>
        <p className="text-blue-400 text-3xl font-bold my-5">
           Dream Job
        </p>

        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="my-5 bg-blue-400 text-white rounded-md p-2">
          Get Started
        </button>
      </div>
      <div>
        <img className=" object-cover" src={user} alt="" />
      </div>
    </div>
  );
}

export default App
