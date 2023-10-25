import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://th.bing.com/th/id/R.d2edb29f3f970c36aadecbb01ed0bb79?rik=z%2bAuuobpN0KNSg&riu=http%3a%2f%2fisquad.tv%2fwp-content%2fuploads%2f2018%2f08%2fNetflix-Background.jpg&ehk=Ij4PSd%2bZkTcESSlAVWoGpNmExM0fu3BgteNT6AnS9lM%3d&risl=&pid=ImgRaw&r=0' alt='bg-image'></img>
      </div>
      <form className='bg-black bg-opacity-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/12 p-12 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input type='text' placeholder='Full Name' className='p-2 m-2 text-black w-full bg-gray-800 rounded-lg'></input>}
        <input type='text' placeholder='Email or phone number' className='p-2 m-2 text-black w-full bg-gray-800 rounded-lg'></input>
        <input type='password' placeholder='Password' className='p-2 m-2 text-black w-full bg-gray-800 rounded-lg'></input>
        <button className='p-2 mx-2 my-10 bg-red-600 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now": "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login