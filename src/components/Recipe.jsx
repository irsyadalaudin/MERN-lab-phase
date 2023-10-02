/* eslint-disable react/no-unescaped-entities */
// import { useState } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Recipe = () => {
    const [ingredients, setIngredients] = useState('')
    const [recipes, setRecipes] = useState([])
    const [contentExceddHeight, setContentExceddHeight] = useState(false)

    const searchRecipe = async () => {
        try {
            const response = await
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
            setRecipes(response.data.meals)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleIngredients = (e) => {
        setIngredients(e.target.value)
    }

    useEffect(() => {
        const container = document.getElementById('recipe')
        const contentHeight = container.scrollHeight
        const containerHeight = container.clientHeight

        if (contentHeight > containerHeight) {
            setContentExceddHeight(true)
        } else {
            setContentExceddHeight(false)
        }
    }, [recipes])  // MONITOR CHANGES TO 'RECIPES'

    const containerStyle = `bg-yellow-600 px-28 ${contentExceddHeight ? 'h-full' : 'h-90'}`


    return (
        <div id='recipe' className={containerStyle}>
            <div>
                <h1 className='text-4xl flex justify-center pt-8'>Let's cook !</h1>
                <p className='text-2xl text-justify mt-4'>"Have you ever been confused about what to eat? Want to buy food, but afraid of wasting money or having little money? Want to cook, but can't cook? Or can cook, but the ingredients are limited? Now we are here to provide a solution, especially for students who can still cook and eat deliciously, even with limited and cheap ingredients! Have you ever found yourself in a situation where you're not sure what to eat? Perhaps you're considering buying food, but you're worried about spending too much money or you have a tight budget. Maybe you have a desire to cook your own meals, but you lack the culinary skills. Or perhaps you're a skilled cook, but you find yourself with limited ingredients. We are here to offer a solution to these challenges, and our focus is particularly on students who want to enjoy delicious meals. Even with limited resources and budget-friendly ingredients, you can still prepare and savor tasty dishes!"</p>    
            </div> 
            <form onSubmit={handleSubmit} className='flex justify-center px-28 mt-4'>
                <textarea onChange={handleIngredients} className='placeholder-white focus:outline-none resize-none text-xl p-3 w-97 h-20 bg-yellow-800 text-white rounded-md' placeholder='Enter your ingredients'></textarea>
            </form>
            <button onClick={searchRecipe} className='float-right self-end h-8 w-20 mt-2 mx-28 bg-yellow-800 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Search</button>
            {recipes.map(recipe => (
                <div key={recipe.idMeal}>
                    <h2>{recipe.strMeal}</h2>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
            ))}
        </div>
    )
}

export default Recipe