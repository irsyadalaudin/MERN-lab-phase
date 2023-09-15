/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */

import { Link } from 'react-router-dom'

const Navbar = () => {
        const scrollToTop = () => {
            windows.scrollTo({ top: 0, behavior: 'smooth' })
        }

    return (
        <nav className='bg-yellow-800 text-neutral-100 h-14 flex justify-between items-center px-28 sticky top-0 hover:cursor-pointer'>
            <h1>
                <Link to='/' onClick={scrollToTop}>AYO MASAK</Link>
            </h1>
            <div className='flex gap-4 no-underline'>
                <a className='text-neutral-100 no-underline' href='/'>Home</a>
                <a className='text-neutral-100 no-underline' href='/recipe'>Recipe</a>
                <a className='text-neutral-100 no-underline' href='/contact-us'>Contact us</a>
                <a className='text-neutral-100 no-underline' href='/about-us'>About us</a>
            </div>
        </nav>
    )
}

export default Navbar