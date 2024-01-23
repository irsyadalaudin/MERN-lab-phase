import Recipe from './Recipe'

const Home = () => {
    const scrollDownToRecipe = () => {
        const element = document.getElementById('recipe')
        element.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <>
            <div id='home' className=' h-90 flex items-center pl-10 lg:pl-28 overflow-hidden'>
                <div className='flex-1'>
                    <h1 className='text-4xl mb-4'>What ingredients do you have?</h1>
                    <p className='text-xl mb-6'>They can surely be turned into delicious food, and anyone can cook!</p>
                    <button onClick={scrollDownToRecipe} className='bg-yellow-800 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Click here</button>
                </div>
                <img className='xl:w-90 2xl:w-93 sm:h-full xl:h-90' src='https://i.postimg.cc/qRLWYDYm/tofu-2.png' alt='tofu-image' />
            </div>
            <Recipe />
        </>
    )
}

export default Home