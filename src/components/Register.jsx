import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='mt-4'>
        <h1 className='text-white text-[3vh]'>Ready to watch? Enter your email to create or restart your membership.</h1>
        <div className='flex justify-center items-center gap-5 mt-3'>
            <input placeholder='Email Address' className='bg-black/60 border-gray-500 border-[1px] w-[25vw] font-semibold py-4 px-2 text-white rounded'/>
            <Link to="/signup" className='text-white bg-red-600 px-8 py-[1vh] rounded text-[4vh]'>Get Started > </Link>
        </div>
    </div>
  )
}

export default Register