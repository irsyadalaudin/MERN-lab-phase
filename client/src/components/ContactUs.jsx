/* eslint-disable react/no-unescaped-entities */
const ContactUs = () => {
    return (
        <div className='h-full xl:h-90 px-28'>
            <h1 className='text-4xl flex justify-center pt-8'>Contact Us</h1>
            <div className='text-2xl font-bold text-justify'>
                <p className='mt-4'>If you ever find yourself in a culinary conundrum, unsure of what to enjoy for your meal, or hesitant to spend too much money on food, fear not! Our "Contact Us" page is here to help. Whether you're a cooking enthusiast looking to expand your skills or a skilled chef working with limited ingredients, we're ready to assist you.</p>
                <p className='mt-4'>Feel free to reach out to us with any questions, suggestions, or inquiries. We're dedicated to making your culinary journey enjoyable and budget-friendly. Together, let's explore the world of delightful dishes that anyone can cook, regardless of their culinary expertise or budget limitations.</p>
                <p className='mt-4'>Contact us today, and let's embark on a flavorful adventure!</p>
            </div>
            {/* <form className='mx-28 lg:mx-0 mt-4'> */}
            <form className='mt-4'>
                <div className='flex justify-center sm:justify-start mx-0 xl:mx-48 mb-2'>
                    <input className='placeholder-white focus:outline-none text-xl p-2 h-5 w-30 md:w-52 xl:w-64 bg-yellow-800 text-white rounded-md' type='text' placeholder='Name' />
                </div>
                <div className='flex justify-center sm:justify-start mx-0 xl:mx-48 mb-2'>
                    <input className='placeholder-white focus:outline-none text-xl p-2 h-5 w-30 md:w-52 xl:w-64 bg-yellow-800 text-white rounded-md' type='email' placeholder='Emaill' />
                </div>
                <div className='flex justify-center sm:justify-start'>
                <textarea className=' placeholder-white focus:outline-none resize-none text-xl p-2 mx-0 xl:mx-48 w-52 sm:w-full xl:w-94 h-20 bg-yellow-800 text-white rounded-md' placeholder='Enter your messages' cols='30' rows='10'></textarea>
                </div>
                <div className='flex justify-center sm:justify-end pb-4 xl:pb-0'>
                    <button type='submit' className='float-right self-end h-8 w-20 mt-2 mx-0 xl:mx-48 bg-yellow-800 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Search</button>  {/* IF input empty OR isRecipeAvailable IS TRUE, then SEARCH BUTTON WILL BE DISABLED */}
                </div>
            </form>
        </div>
    )
}

export default ContactUs