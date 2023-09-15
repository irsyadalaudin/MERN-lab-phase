import Recipe from './Recipe'

const Home = () => {
    const scrollDownToRecipe = () => {
        const element = document.getElementById('recipe')
        element.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <>
            <div className='bg-yellow-600 h-90 flex items-center pl-28'>
                <div className='flex-1'>
                    <h1 className='text-4xl mb-4'>What ingredients do you have?</h1>
                    <p className='text-xl mb-6'>They can surely be turned into delicious food, and anyone can cook!</p>
                    <button onClick={scrollDownToRecipe} className='bg-yellow-800 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Click here</button>
                </div>
                <img className='w-93' src='https://i.postimg.cc/qRLWYDYm/tofu-2.png' alt='tofu-image' />
            </div>
            <Recipe />
        </>
    )
}

export default Home