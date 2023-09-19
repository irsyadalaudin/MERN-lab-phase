/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
// import { Link, useNavigate } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
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
                recipePage.scrollIntoView({ behavior: 'instant'})
            }, 0)
        }
    }

    return (
        <nav className='bg-yellow-800 text-neutral-100 h-14 flex justify-between items-center px-28 sticky top-0 hover:cursor-pointer'>
            <h1>
                <Link to='/' onClick={scrollToTopHome}>AYO MASAK</Link>
            </h1>
            <div className='flex gap-4 no-underline'>
                <Link to='/' onClick={scrollToTopHome} className='text-neutral-100 no-underline'>Home</Link>
                <Link to='/' onClick={scrollToBottomRecipe} className='text-neutral-100 no-underline'>Recipe</Link>
                <Link to='/contact-us' className='text-neutral-100 no-underline'>Contact us</Link>
                <Link to='/about-us' className='text-neutral-100 no-underline'>About us</Link>
                <Link to='/login' className='text-neutral-100 no-underline'>Login</Link>
                <Link to='/account' className='text-neutral-100 no-underline'>Account</Link>
            </div>
        </nav>
    )
}

export default Navbar