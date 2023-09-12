// import { useRef } from 'react'

/* eslint-disable react/no-unescaped-entities */
const Recipe = () => {
    return (
        <>
            <div id='recipe' className='bg-yellow-600 h-90 px-28'>
                <div>
                    <h1 className='text-4xl flex justify-center pt-10'>Let's cook !</h1>
                    <p className='text-xl leading-7'>"Have you ever been confused about what to eat? Want to buy food, but afraid of wasting money or having little money? Want to cook, but can't cook? Or can cook, but the ingredients are limited? Now we are here to provide a solution, especially for students who can still cook and eat deliciously, even with limited and cheap ingredients! Have you ever found yourself in a situation where you're not sure what to eat? Perhaps you're considering buying food, but you're worried about spending too much money or you have a tight budget. Maybe you have a desire to cook your own meals, but you lack the culinary skills. Or perhaps you're a skilled cook, but you find yourself with limited ingredients. We are here to offer a solution to these challenges, and our focus is particularly on students who want to enjoy delicious meals. Even with limited resources and budget-friendly ingredients, you can still prepare and savor tasty dishes!"</p>    
                </div>
                <form className='flex justify-center self-start relative'>
                    <textarea className='resize-none text-xl w-97 h-64' placeholder='Enter your ingredients'></textarea>
                    <button className='float-right mt-2 mb-3 mr-26 absolute bottom-0 right-0 h-8 w-16'>Search</button>
                </form>
            </div>
        </>
    )
}

export default Recipe