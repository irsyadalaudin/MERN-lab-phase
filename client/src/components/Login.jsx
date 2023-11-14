/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'

const Login = () => {
    const [showSignIn, setShowSignIn] = useState(true)
    const [disableSignUp, setDisableSignUp] = useState(false)

    const handleToggleSignIn = () => {
        setShowSignIn(true)
        setDisableSignUp(false)
        document.getElementById('sign-in-btn').disable = true 
    }

    const handleToggleSignUp = () => {
        setShowSignIn(false)
        setDisableSignUp(true)
        document.getElementById('sign-up-btn').disable = true    
    }

    return (
        // <div className='bg-yellow-600 h-full xl:h-90 px-28 flex justify-center items-center'>
        <div className='bg-yellow-600 h-89 flex items-center pl-10 overflow-hidden'>
            <div className='w-2/3 xl:w-1/2 text-center'>
                <div className='flex justify-center'>
                    <p className='mb-6 text-2xl text-justify flex justify-center w-85'>Embark on a delightful culinary journey with us at AYO MASAK! &ensp; Let's make every meal an enjoyable and budget-friendly experience</p>
                </div>
                <button onClick={handleToggleSignIn} disabled={showSignIn ? true : false} id='sign-in-btn' className='p-1 mb-2 bg-amber-700 rounded-l-lg hover: cursor-pointer hover:bg-amber-800'>Sign In</button>
                <button onClick={handleToggleSignUp} disabled={disableSignUp} id='sign-up-btn' className='p-1 mb-2 bg-amber-700 rounded-r-lg hover: cursor-pointer hover:bg-amber-800'>Sign Up</button>
                {/* SIGN IN */}
                <form className='flex flex-col items-center px-0 lg:px-20 xl:px-28' style={{ display: showSignIn ? 'block' : 'none' }}>
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='text' placeholder='Email / Username' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='password' placeholder='Password' />
                    <div className='flex justify-center xl:justify-end'>
                        <p className='mt-2 mr-4 ml-0 xl:ml-9'>Don't have an account?<a onClick={handleToggleSignUp} href='#' className='ml-1 no-underline'>sign up</a></p>
                        <button type='submit' className='h-8 w-20 mt-2 mx-0 xl:mx-10 bg-yellow-800 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Login</button>  {/* IF input empty OR isRecipeAvailable IS TRUE, then SEARCH BUTTON WILL BE DISABLED */}
                    </div>
                </form>
                {/* SIGN UP */}
                <form className='flex flex-col items-center px-0 xl:px-28' style={{ display: showSignIn ? 'none' : 'block' }}>
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='text' placeholder='Name' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='text' placeholder='Username' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='email' placeholder='Email' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='password' placeholder='Password' />
                    <div className='flex justify-center xl:justify-end'>
                        <button type='submit' className='float-right self-end h-8 w-20 mt-2 mx-0 xl:mx-9 bg-yellow-800 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Register</button>  {/* IF input empty OR isRecipeAvailable IS TRUE, then SEARCH BUTTON WILL BE DISABLED */}
                    </div>
                </form>
            </div>
            {/* IMAGE */}
            <div className='bg-yellow-600 h-90 flex items-center pl-10 lg:pl-28 overflow-hidden'>
                <img className='xl:w-90 2xl:w-93 sm:h-full xl:h-90' src='https://i.postimg.cc/GpDsrkWB/tofu-5.png' alt='tofu-image' />
            </div>
        </div>
    )
}

export default Login