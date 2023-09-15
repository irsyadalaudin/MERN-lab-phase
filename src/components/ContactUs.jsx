/* eslint-disable react/no-unescaped-entities */
const ContactUs = () => {
    return (
        <div className='bg-yellow-600 h-90 px-28'>
            <h1 className='text-4xl flex justify-center pt-8'>Contact Us</h1>
            <div className='text-2xl font-bold'>
                <p className='mt-4'>If you ever find yourself in a culinary conundrum, unsure of what to enjoy for your meal, or hesitant to spend too much money on food, fear not! Our "Contact Us" page is here to help. Whether you're a cooking enthusiast looking to expand your skills or a skilled chef working with limited ingredients, we're ready to assist you.</p>
                <p className='mt-4'>Feel free to reach out to us with any questions, suggestions, or inquiries. We're dedicated to making your culinary journey enjoyable and budget-friendly. Together, let's explore the world of delightful dishes that anyone can cook, regardless of their culinary expertise or budget limitations.</p>
                <p className='mt-4'>Contact us today, and let's embark on a flavorful adventure!</p>
            </div>
                <form className='flex flex-col self-center mt-4 px-28'>
                    <input className='placeholder-white focus:outline-none w-64 text-lg mb-2 bg-yellow-800 text-white rounded' type='text' placeholder='name'/>
                    <input className='placeholder-white focus:outline-none w-64 text-lg mb-2 bg-yellow-800 text-white rounded' type='email' placeholder='email' />
                    <textarea className='placeholder-white focus:outline-none resize-none text-xl w-95 h-36 p-2 bg-yellow-800 text-white rounded-md' placeholder='Enter your message'></textarea>
                </form>
                <button className='float-right h-8 w-20 mt-2 mx-28 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900'>Search</button>
        </div>
    )
}

export default ContactUs