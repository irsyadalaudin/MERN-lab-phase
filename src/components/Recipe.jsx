/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const Recipe = () => {
    const [ingredients, setIngredients] = useState([])
    const [recipes, setRecipes] = useState([])
    const [contentExceddHeight, setContentExceddHeight] = useState(false)
    const [showNoRecipesMessage, setShowNoRecipesMessage] = useState(false)
    const [selectedRecipeDetail, setSelectedRecipeDetail] = useState(null)
    const [isRecipeVisible, setIsRecipeVisible] = useState(false)
    const [isRecipeDetailVisible, setIsRecipeDetailVisible] = useState(false)
    const [isBackButtonDisabled, setIsBackButtonDisabled] = useState(true)
    const inputRef = useRef(null)

    const searchRecipe = async () => {
        try {
            const joinedIngredients = ingredients.join(',')
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(joinedIngredients)}`)        // THIS ENSURES THAT IF joinedIngredients CONTAINS SPECIAL CHARACTERS OR SPACE, THOSE CHARACTERS WILL BE CONVERTED TO A PRECENTAGE REPRESENTATION THAT IS SAFE FOR USE IN URLs
            setRecipes(response.data.meals || [])
            setShowNoRecipesMessage(response.data.meals ? false : true)  // AFTER GETTING THE RESULTS, SET THE MESSAGE DISPLAY BASED ON THE RESULTS  // WHEN response.data.meals HAS A VALUE (truthly), THEN setShowNoRecipesMessage BECOMES (false), AND THE MESSAGE `No recipes found for the specified ingredients` IS NOT DISPLAYED
            inputRef.current.value = ''                                  // CLEAR THE INPUT AFTER SEARCH
        }
        catch (error) {
            console.error(error)
        }
    }

    const getRecipeDetail = async (mealId) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            setSelectedRecipeDetail(response.data.meals[0])
        }
        catch (error) {
            console.error('Error fetching recipe details:', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (ingredients.length > 0) {
            searchRecipe()
        }
    }

    const disabledSubmit = () => ingredients.length === 0 || !inputRef.current.value  // ARROW FUNCTION WITH IMPLICT RETURN (WITHOUT RETURN)

    const disabledEnter = (e) => {
        if (e.key === 'Enter' && (ingredients.length === 0|| !inputRef.current.value)) {
            e.preventDefault()
        }
    }

    const handleIngredients = (e) => {
        const input = e.target.value
        const ingredientsArray = input.split(/[\s,]/).filter(ingredients => ingredients.length > 0)  // input IS THE VALUE THAT THE USER ENTERS FROM e.target.value INTO input // split IS A METHOD ON STRINGS THAT SPLITS A STRING INTO A SUBSTRING ARRAY USING CERTAIN SEPARATIONS (/[\s,]/), SO THE STRING WILL BE SPLIT EVERY TIME THERE IS A SPACE OR A COMMA   // ingredients.length > 0 IS A FUNCTION THAT ENSURES THAT ONLY ELEMENTS THAT HAVE LENGTH MORE THAN 0 WILL BE INSERTED INTO THE ARRAY OF THE FILTERS
        setIngredients(ingredientsArray)
    }

    // FOKUS DISINI
    const backIntoEmptyRecipe = () => {
        setIsRecipeVisible(false)
        setContentExceddHeight(false)
    }

    const backIntoSelecetdRecipeDetail = () => {
        setIsRecipeDetailVisible(true)
        setContentExceddHeight(true)
    }

    useEffect(() => {
        if(selectedRecipeDetail) {
            setIsBackButtonDisabled(false)
        } else {
            setIsBackButtonDisabled(true)
        }
    }, [selectedRecipeDetail])

    useEffect(() => {
    const container = document.getElementById('recipe')
    const contentHeight = container.scrollHeight
    const containerHeight = container.clientHeight
        if (contentHeight > containerHeight) {
            setContentExceddHeight(true)
        } else {
            setContentExceddHeight(false)
        }
    }, [recipes]) 

    const containerStyle = `bg-yellow-600 px-28 ${contentExceddHeight ? 'h-full' : 'h-90'}`


    return (
        <div id='recipe' className={containerStyle}>
            <div>
                <h1 className='text-4xl flex justify-center pt-8'>Let's cook !</h1>
                <p className='text-2xl text-justify mt-4'>"Have you ever been confused about what to eat? Want to buy food, but afraid of wasting money or having little money? Want to cook, but can't cook? Or can cook, but the ingredients are limited? Now we are here to provide a solution, especially for students who can still cook and eat deliciously, even with limited and cheap ingredients! Have you ever found yourself in a situation where you're not sure what to eat? Perhaps you're considering buying food, but you're worried about spending too much money or you have a tight budget. Maybe you have a desire to cook your own meals, but you lack the culinary skills. Or perhaps you're a skilled cook, but you find yourself with limited ingredients. We are here to offer a solution to these challenges, and our focus is particularly on students who want to enjoy delicious meals. Even with limited resources and budget-friendly ingredients, you can still prepare and savor tasty dishes!"</p>    
            </div>

            <form onSubmit={handleSubmit} className='px-28 mt-4'>
                <input onChange={handleIngredients} onKeyDown={disabledEnter} ref={inputRef} className='placeholder-white focus:outline-none text-xl p-3 w-94 h-20 bg-yellow-800 text-white rounded-md' placeholder='Enter your ingredients' />
                <button onClick={() => { searchRecipe(); setIsRecipeVisible(true); setIsRecipeDetailVisible(false); setContentExceddHeight(true) }} disabled={disabledSubmit()} type='submit' className='float-right self-end h-8 w-20 mt-2 bg-yellow-800 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Search</button>  {/* IF input empty OR isRecipeAvailable IS TRUE, then SEARCH BUTTON WILL BE DISABLED */}
            </form>

            {showNoRecipesMessage && (
                <p>No recipes found for the specified ingredients</p>
            )}

            {/* {recipes.map(recipe => ( */}
            {!isRecipeDetailVisible && isRecipeVisible && (
                <div>
                    <button onClick={backIntoSelecetdRecipeDetail} disabled={isBackButtonDisabled} className={`${isBackButtonDisabled ? 'bg-slate-100 text-white' : ''}`}>back into selecetdRecipeDetail</button>
                    <button onClick={backIntoEmptyRecipe}>⬅</button>
                    {recipes.map(recipe => (
                        <div key={recipe.idMeal}>
                            <h2>{recipe.strMeal}</h2>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <button onClick={() => { setIsRecipeDetailVisible(true); getRecipeDetail(recipe.idMeal) }}>Recipe</button>
                        </div>
                    ))}
                    <button onClick={backIntoEmptyRecipe}>⬅</button>
                </div>
            )}

            {/* {selectedRecipeDetail && ( */}
            {isRecipeDetailVisible && selectedRecipeDetail && (
                <div>
                    <h2>Recipe Detail for: {selectedRecipeDetail.strMeal}</h2>
                    <img src={selectedRecipeDetail.strMealThumb} alt={selectedRecipeDetail.strMeal} />
                    <h3>Ingredients:</h3>
                    <ul>
                        {Array.from({ length: 20 }, (v, index) => index + 1)
                            .filter((index) => selectedRecipeDetail[`strIngredient${index}`])
                            .map((index) => (
                                <li key={index}>
                                    {selectedRecipeDetail[`strIngredient${index}`]} - {' '}
                                    {selectedRecipeDetail[`strMeasure${index}`]}
                                </li>
                            ))
                        }
                    </ul>
                    <h3>Cooking Instructions:</h3>
                    <p>{selectedRecipeDetail.strInstructions}</p>
                    <button onClick={() => setIsRecipeDetailVisible(false)}>⬅</button>
                </div>
            )}
        </div>
    )
}

export default Recipe