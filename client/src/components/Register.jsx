/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='bg-yellow-600 h-89 flex items-center pl-10 overflow-hidden'>
            <div className='w-2/3 xl:w-1/2 text-center'>
                <img src='https://i.postimg.cc/jjCNhpY2/ayo-masak-logo.png' alt='ayo-masak-logo' />
                <div className='flex justify-center'>
                    <p className='mb-6 text-2xl text-justify flex justify-center w-85'>Embark on a delightful culinary journey with us at AYO MASAK! &ensp; Let's make every meal an enjoyable and budget-friendly experience</p>
                </div>
                {/* BUTTON Link to LOGIN */}
                <button className='p-1 mb-2 bg-amber-700 rounded-l-lg hover: cursor-pointer hover:bg-amber-800'>
                    <Link to='/login' className='text-white no-underline'>Sign In</Link>
                </button>
                <button disabled className='p-1 mb-2 bg-amber-700 rounded-r-lg hover: cursor-pointer hover:bg-amber-800 no-underline'>SignUp</button>
                {/* SIGN UP */}
                <form className='flex flex-col items-center px-0 xl:px-28' >
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='text' placeholder='Name' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='text' placeholder='Username' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='email' placeholder='Email' />
                    <input className='placeholder-white focus:outline-none w-80 text-lg p-2 mb-2 bg-yellow-800 text-white rounded-lg' type='password' placeholder='Password' />
                    <div className='flex justify-center xl:justify-end'>
                        <button type='submit' className='h-8 w-20 mt-2 mx-0 xl:mx-9 bg-yellow-800 text-white py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Register</button>
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

export default Register