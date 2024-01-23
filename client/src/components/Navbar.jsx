/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
// import { Link, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = ({ user, onLogout }) => {
    const scrollToTopHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const scrollToBottomRecipe = (e) => {
        e.preventDefault()
        if (location.pathname === '/') {
            const recipePage = document.getElementById('recipe')
            recipePage.scrollIntoView({ behavior: 'smooth' })
        } else {
            setTimeout(() => {
                const recipePage = document.getElementById('recipe')
                recipePage.scrollIntoView({ behavior: 'instant' })
            }, 0)
        }
    }

    return (
        <nav className='bg-yellow-800 text-neutral-100  lg:h-14 pb-2 lg:pb-0 px-0 lg:px-18 xl:px-28 flex-col lg:flex-row flex justify-between items-center sticky top-0 hover:cursor-pointer'>
            <h1>
                {/* <Link to='/' onClick={scrollToTopHome}>AYO MASAK</Link> */}

                <Link to='/' onClick={scrollToTopHome}><img className='justify-center w-22 mt-0 md:mt-1 lg:mt-2 xl:mt-1 mx-0 lg:mx-10 xl:mx-0' src='https://i.postimg.cc/J4w6KWXw/ayo-masak-logo2.png' alt='ayo masak logo' /></Link>
            </h1>
            <div className='flex gap-4 no-underline text-xs sm:text-base ml-0.5 sm:ml-0'>
                <Link to='/' onClick={scrollToTopHome} className='text-neutral-100 no-underline'>Home</Link>
                <Link to='/' onClick={scrollToBottomRecipe} className='text-neutral-100 no-underline'>Recipe</Link>
                <Link to='/contact-us' className='text-neutral-100 no-underline'>Contact us</Link>
                <Link to='/about-us' className='text-neutral-100 no-underline'>About us</Link>
                <Link to='/account' className='text-neutral-100 no-underline'>Account</Link>
                <Link to='/login' className='text-neutral-100 no-underline'>Login</Link>
                {user && (
                    <div className='flex items-center bg-yellow-600 rounded-md gap-2 pl-1 mr-1 sm:mr-0 md:mr-2 '>
                        <span className='text-black'>{user.username}</span>
                        <button onClick={onLogout} className='bg-yellow-600 text-black rounded-md hover:cursor-pointer hover:bg-yellow-700 border-none'>Logout</button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar