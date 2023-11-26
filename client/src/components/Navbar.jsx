import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const [navbarVisibility, setNavbarVisibility] = useState(false)

    const { Logout } = useLogout()
    const { user } = useAuthContext()

    const scrollToTopHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const navigate = useNavigate()
    const scrollToBottomRecipe = (e) => {
        e.preventDefault()
        if (location.pathname === '/') {
            const recipePage = document.getElementById('recipe')
            recipePage.scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate('/')
            setTimeout(() => {
                const recipePage = document.getElementById('recipe')
                recipePage.scrollIntoView({ behavior: 'instant' })
            }, 0)
        }
    }

    const handleLogout = () => {
        Logout()
        navigate('/login')
    }

    useEffect(() => {
        // Update visibility based on user status
        setNavbarVisibility(!!user)
    }, [user])

    return (
        <>
            {navbarVisibility && (
                <nav className='bg-yellow-800 text-neutral-100 md:h-20 lg:h-14 py-3 lg:py-0 px-0 md:px-28 flex-col lg:flex-row flex justify-between items-center sticky top-0 hover:cursor-pointer'>
                    <h1>
                        <Link to='/' onClick={scrollToTopHome}>
                            <img className='mt-0 xl:mt-2' src='https://i.postimg.cc/BZFTkfL1/ayo-masak-logo.png' alt='' />
                        </Link>
                    </h1>
                    <div className='mt-5 md:mt-0 flex gap-4 no-underline text-sm sm:text-base'>
                        <Link to='/' onClick={scrollToTopHome} className='text-neutral-100 no-underline'>
                            Home
                        </Link>
                        <Link to='/' onClick={scrollToBottomRecipe} className='text-neutral-100 no-underline'>
                            Recipe
                        </Link>
                        <Link to='/contact-us' className='text-neutral-100 no-underline'>
                            Contact us
                        </Link>
                        <Link to='/about-us' className='text-neutral-100 no-underline'>
                            About us
                        </Link>
                        <Link to='/account' className='text-neutral-100 no-underline'>
                            Account
                        </Link>
                        {user && (
                            <div className='flex justify-center bg-yellow-600 rounded-md gap-2 pl-1'>
                                <span className='text-black'>{user.username}</span>
                                <button onClick={handleLogout} className='bg-yellow-600 text-black rounded-md hover:cursor-pointer hover:bg-yellow-700 border-none'>Logout</button>
                            </div>
                        )}
                        {!user && (
                            <div>
                                <Link to='/login' className='text-neutral-100 no-underline'>Login</Link>
                            </div>
                        )}
                    </div>
                </nav>
            )}
        </>
    )
}

export default Navbar