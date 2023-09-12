// import { Link } from 'react-router-dom'

/* eslint-disable no-mixed-spaces-and-tabs */
const Navbar = () => {
    return (
        <nav className='bg-yellow-800 text-neutral-100 h-14 flex justify-between items-center px-28 sticky top-0 hover:cursor-pointer'>
            <h1>
                <a className='text-neutral-100 no-underline' href='/'>FOOD RECIPE</a>
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