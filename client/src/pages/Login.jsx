/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        // console.log(identifier, password)
        await login(identifier, password)
        setIdentifier('')
        setPassword('')
        navigate('/')
    }


    return (
        <div className='bg-yellow-600 h-90 flex items-center pl-10 overflow-hidden'>
            <div className='w-2/3 xl:w-1/2 text-center'>
                <img src='https://i.postimg.cc/jjCNhpY2/ayo-masak-logo.png' alt='ayo-masak-logo' />
                <div className='flex justify-center'>
                    <p className='mb-6 text-2xl text-justify flex justify-center w-85'>Embark on a delightful culinary journey with us at AYO MASAK! &ensp; Let's make every meal an enjoyable and budget-friendly experience</p>
                </div>
                {/* BUTTON Link to REGISTER */}
                <button disabled className='p-1 mb-2 bg-amber-700 rounded-l-lg hover: cursor-pointer hover:bg-amber-800' >Sign In</button>
                <Link to='/register' id='sign-in-btn'>
                    <button id='sign-up-btn' className='p-1 mb-2 text-white bg-amber-700 rounded-r-lg hover: cursor-pointer hover:bg-amber-800'>Sign Up</button>
                </Link>
                {/* SIGN IN */}
                <form onSubmit={handleSubmit} className='flex flex-col items-center px-0 lg:px-20 xl:px-28'>
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='text' onChange={(e) => setIdentifier(e.target.value)} value={identifier} placeholder='Email / Username' autoComplete='Email / Username' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' autoComplete='Password' />
                    <div className='flex justify-center xl:justify-end'>
                        <p className='mt-3 mr-4 ml-0 xl:ml-9'>
                            Don't have an account ? &ensp;
                            <Link to='/register' className='text-black hover:text-white'>Sign Up here !</Link>
                        </p>
                        <button disabled={isLoading} type='submit' className='h-8 w-20 mt-2 mx-0 xl:mx-10 bg-yellow-800 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Sign In</button>
                    </div>
                    {error && <div className='error'>{error}</div>}
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