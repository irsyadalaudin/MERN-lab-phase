const Home = () => {
    return (
        <div className='h-90 bg-yellow-500 flex items-center pl-28'>
            <div className='flex-1 line-hei'>
                <h1 className='text-4xl'>What ingredients do you have?</h1>
                <p className='text-2xl pb-6'>They can surely be turned into delicious food, and anyone can cook!</p>
                <button className='bg-yellow-800 text-white px-4 py-2 rounded-md'>Click here</button>
            </div>
            <img className='w-93' src='https://i.postimg.cc/qRLWYDYm/tofu-2.png' alt='tofu-image' />
        </div>
    )
}

export default Home