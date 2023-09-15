/* eslint-disable react/no-unescaped-entities */
const Recipe = () => {
    return (
        <>
            <div id='recipe' className='bg-yellow-600 h-90 px-28'>
                <div>
                    <h1 className='text-4xl flex justify-center pt-8'>Let's cook !</h1>
                    <p className='text-2xl'>"Have you ever been confused about what to eat? Want to buy food, but afraid of wasting money or having little money? Want to cook, but can't cook? Or can cook, but the ingredients are limited? Now we are here to provide a solution, especially for students who can still cook and eat deliciously, even with limited and cheap ingredients! Have you ever found yourself in a situation where you're not sure what to eat? Perhaps you're considering buying food, but you're worried about spending too much money or you have a tight budget. Maybe you have a desire to cook your own meals, but you lack the culinary skills. Or perhaps you're a skilled cook, but you find yourself with limited ingredients. We are here to offer a solution to these challenges, and our focus is particularly on students who want to enjoy delicious meals. Even with limited resources and budget-friendly ingredients, you can still prepare and savor tasty dishes!"</p>    
                </div>
                <form className='flex justify-center px-28'>
                    <textarea className='resize-none text-xl w-97 h-56' placeholder='Enter your ingredients'></textarea>
                </form>
                    <button className='float-right self-end h-8 w-20 mt-2 mx-28'>Search</button>
            </div>
        </>
    )
}

export default Recipe