/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
import { Link } from 'react-router-dom'

const Navbar = () => {
    const scrollToTop = () => {
        windows.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollToBottom = () => {
        const element = document.getElementById('recipe')
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className='bg-yellow-800 text-neutral-100 h-14 flex justify-between items-center px-28 sticky top-0 hover:cursor-pointer'>
            <h1>
                <Link to='/' onClick={scrollToTop}>AYO MASAK</Link>
            </h1>
            <div className='flex gap-4 no-underline'>
                <Link to='/' onClick={scrollToTop} className='text-neutral-100 no-underline'>Home</Link>
                <Link to='/' onClick={scrollToBottom} className='text-neutral-100 no-underline'>Recipe</Link>
                <Link to='/contact-us' className='text-neutral-100 no-underline'>Contact us</Link>
                <Link to='/about-us' className='text-neutral-100 no-underline'>About us</Link>
                <Link to='/login' className='text-neutral-100 no-underline'>Login</Link>
            </div>
        </nav>
    )
}

export default Navbar