const Navbar = () => {
    return (
        <nav className='bg-yellow-800 h-14 flex justify-between items-center px-28 sticky top-0'>
            <h1>FOOD RECIPE</h1>

            <div className='flex gap-4 no-underline'>
                <a className='no-underline' href='/'>Home</a>
                <a className='no-underline' href='/recipe'>Recipe</a>
                <a className='no-underline' href='/contact-us'>Contact us</a>
                <a className='no-underline' href='/about-us'>About us</a>
            </div>
        </nav>
    )
}

export default Navbar