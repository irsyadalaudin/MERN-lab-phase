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
        <>
        <div className='bg-yellow-600 h-90 px-28 flex justify-center items-center'>
            <div className='w-1/2 text-center relative'>
                <p className='mb-10 text-2xl'>Embark on a delightful culinary journey with us at AYO MASAK! <br /> Let's make every meal an enjoyable and budget-friendly experience</p>
                <button onClick={handleToggleSignIn} disabled={showSignIn ? true : false} id='sign-in-btn' className='p-1 mb-2 bg-amber-700 rounded-l-lg'>Sign In</button>
                <button onClick={handleToggleSignUp} disabled={disableSignUp} id='sign-up-btn' className='p-1 mb-2 bg-amber-700 rounded-r-lg'>Sign Up</button>
                {/* SIGN IN */}
                <form className='flex flex-col items-center px-28' style={{ display: showSignIn ? 'block' : 'none'}}>
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='text' placeholder='Email / Username' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='password' placeholder='Password' />
                    <p>create your account if you don't have an account yet!</p>
                </form>
                {/* SIGN UP */}
                <form className='flex flex-col items-center px-28' style={{ display: showSignIn ? 'none' : 'block'}}>
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='text' placeholder='Name' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='text' placeholder='Username' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='email' placeholder='Email' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='password' placeholder='Password' />
                </form>
            </div>

            {/* IMAGE */}
            <div className='w-1/2 flex justify-center relative'>
                <img className='w-450' src='https://i.postimg.cc/L6XC79m3/tofu-3.png' alt='tofu-login' style={{ objectFit: 'contain'}}/>
            </div>
        </div>
        </>
    )
}

export default Login