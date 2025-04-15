import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm)


  }
  return <div>
     <Header/> 
     <div className='absolute'>
     <img className="min-h-screen overflow-auto"
       src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-environmentally-friendly-album-background-material-image_135491.jpg"
       
       alt="Logo" />
     </div>


     
     {/* <form className='w-3/12 absolute p-12 bg-indigo-950	
 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80  ' >
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input type="text" placeholder="Email Address" className=" p-4 my-4 w-full"/>
        <input type="text" placeholder="Password" className=" p-4 my-4 w-full"/>
        <button className="p-6 my-4 bg-green w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 ' onClick={toggleSignInForm}>{isSignInForm ? "New to Eco-Move? Sign Up Now" : "Already registered Sign Up Now"}</p>
      </form> */}

<form className="w-3/12 absolute p-12 bg-indigo-950 bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
  <h1 className="font-bold text-3xl py-4">
    {isSignInForm ? "Sign In" : "Sign Up"}
  </h1>

  {!isSignInForm &&(
    <input
      type="text"
      placeholder="Full Name"
      className="p-4 my-4 w-full rounded text-black"
   />
  )}

  <input
    type="text"
    placeholder="Email Address"
    className="p-4 my-4 w-full rounded text-black"
  />
 
  <input
    type="password"
    placeholder="Password"
    className="p-4 my-4 w-full rounded text-black"
  />

  <button
    className="p-4 my-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
  >
    {isSignInForm ? "Sign In" : "Sign Up"}
  </button>

  <p className="py-4 cursor-pointer hover:underline" onClick={toggleSignInForm}>
    {isSignInForm
      ? "New to Eco-Move? Sign Up Now"
      : "Already have an account? Sign In Now"}
  </p>
</form>

     

  </div>
  
}

export default Login;