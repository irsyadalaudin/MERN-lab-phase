/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'   // Menggunakan useDispatch
import {
    setIngredients,
    setRecipes,
    setSelectedRecipeDetail,
    clearSelectedRecipeDetail,                           // Perbaikan nama action
    setContentExceedHeight,
    clearContentExceedHeight,                            // Perbaikan nama action
} from './store/action/Action'

const Recipe = () => {
    const ingredients = useSelector((state) => state.ingredients)
    const recipes = useSelector((state) => state.recipes)
    const selectedRecipeDetail = useSelector((state) => state.selectedRecipeDetail)
    const contentExceedHeight = useSelector((state) => state.contentExceedHeight)    // Perbaikan, harus menggunakan state.contentExceedHeight
    const dispatch = useDispatch()                                                   // Menggunakan useDispatch

    const [showNoRecipesMessage, setShowNoRecipesMessage] = useState(false)
    const [isRecipeVisible, setIsRecipeVisible] = useState(false)
    const [isRecipeDetailVisible, setIsRecipeDetailVisible] = useState(false)
    const [isBackButtonDisabled, setIsBackButtonDisabled] = useState(true)
    const [inputValue, setInputValue] = useState('')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const inputRef = useRef(null)

    console.log(selectedRecipeDetail);

    const searchRecipeButton = async () => {
        try {
            console.log(ingredients);
            const tmp = []
            const {data} = await axios.get('http://localhost:4000/')
            for (let i = 0; i < data.recipe.length; i++) {
                const res = data.recipe[i]
                for (let x = 0; x < res.ingredients.length; x++) {
                    const ingredient = res.ingredients[x]
                    for (let y = 0; y < ingredients.length; y++) {
                        if(ingredient.toLowerCase() === ingredients[y]){
                            tmp.push(res)
                        }
                    }
                }
            }
            console.log(tmp);
            dispatch(setRecipes(tmp || []))
            setShowNoRecipesMessage(tmp.length == 0 ? true : false)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSearchForm = (e) => {
        searchRecipeButton()
        e.preventDefault()
        setInputValue('')
    }

    const handleRecipeDetail = async (val) => {
        try {
    
            dispatch(setSelectedRecipeDetail(val))
            setIsRecipeDetailVisible(true)
        } catch (error) {
            console.error('Error fetching recipe details:', error)
        }
    };

    const handleIngredientsInput = (e) => {
        const input = e.target.value
        const ingredientsArray = input.split(/[,]/).filter(ingredient => ingredient.length > 0)
        dispatch(setIngredients(ingredientsArray))
        setIngredients(ingredientsArray);               // Tetapkan ke state lokal
        const value = e.target.value
        setInputValue(value)
        setShowNoRecipesMessage(false)
    }

    const backIntoEmptyRecipe = () => {
        setIsRecipeVisible(false)
        dispatch(clearContentExceedHeight())            // Membersihkan contentExceedHeight
    }

    const backIntoSelectedRecipeDetail = () => {
        setIsRecipeDetailVisible(true)
        dispatch(setContentExceedHeight(true))
    }

    const addToFavorite = () => {
        const storedFavoriteRecipe = localStorage.getItem('favorite-recipe')
        const updatedFavoriteRecipe = storedFavoriteRecipe ? JSON.parse(storedFavoriteRecipe) : []

        const favoriteRecipeMeal = selectedRecipeDetail.meal
        const favoriteRecipeThumb = selectedRecipeDetail.mealThumb
        const favoriteRecipeIngredients = selectedRecipeDetail.ingredients
        const favoriteRecipeCookingInstructions = selectedRecipeDetail.cookingInstructions
        updatedFavoriteRecipe.push({
            favoriteRecipeMeal,
            favoriteRecipeThumb,
            favoriteRecipeIngredients,
            favoriteRecipeCookingInstructions
        })

        localStorage.setItem('favorite-recipe', JSON.stringify(updatedFavoriteRecipe))
        alert('Recipe added to favorites!')
        console.log(updatedFavoriteRecipe)
    }

    const hideSelectedRecipeDetail = useCallback(() => {
        dispatch(clearSelectedRecipeDetail())
        dispatch(clearContentExceedHeight())
    }, [dispatch])


    /* USE EFFECT */
    useEffect(() => {
        if (selectedRecipeDetail) {
            setIsBackButtonDisabled(false)
        } else {
            setIsBackButtonDisabled(true)
        }
    }, [selectedRecipeDetail])


    // USE EFFECT FOR BACKGROUND STYLING
    useEffect(() => {
        const container = document.getElementById('recipe')
        const contentHeight = container.scrollHeight
        const containerHeight = container.clientHeight
        if (contentHeight > containerHeight) {
            dispatch(setContentExceedHeight(true))
        } else {
            dispatch(setContentExceedHeight(false))
        }
    }, [recipes, dispatch])

    const containerStyle = `bg-yellow-600 px-10 lg:px-28 h-full ${contentExceedHeight ? 'h-full' : 'xl:h-90'}`


    // USE EFFECT TO UPDATE MINIMIZE RESPONSIVE WINDOW WIDTH BACKGROUND
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    // UPDATE setContentExceedHeight BASED ON WINDOW WIDTH AND isRecipeVisible
    useEffect(() => {
        if (isRecipeVisible) {
            if (windowWidth >= 551) {
                dispatch(setContentExceedHeight(true))
            } else {
                dispatch(setContentExceedHeight(false))
            }
        } else {
            dispatch(setContentExceedHeight(false))
        }
    }, [isRecipeVisible, windowWidth, dispatch])


    // USE EFFECT FOR LOCAL STORAGE
    useEffect(() => {
        const storedFavoriteRecipe = localStorage.getItem('favorite-recipe')
        if (storedFavoriteRecipe) {
            const parsedFavoriteRecipe = JSON.parse(storedFavoriteRecipe)
            dispatch(setSelectedRecipeDetail(parsedFavoriteRecipe))
            setIsRecipeDetailVisible(true)
            hideSelectedRecipeDetail()
        }
    }, [hideSelectedRecipeDetail, dispatch])


    return (
        <div id='recipe' className={containerStyle}>
            <div>
                <h1 className='text-4xl flex justify-center pt-10'>Let's cook !</h1>
                <p className='text-2xl text-justify mt-4'>"Have you ever been confused about what to eat? Want to buy food, but afraid of wasting money or having little money? Want to cook, but can't cook? Or can cook, but the ingredients are limited? Now we are here to provide a solution, especially for students who can still cook and eat deliciously, even with limited and cheap ingredients! Have you ever found yourself in a situation where you're not sure what to eat? Perhaps you're considering buying food, but you're worried about spending too much money or you have a tight budget. Maybe you have a desire to cook your own meals, but you lack the culinary skills. Or perhaps you're a skilled cook, but you find yourself with limited ingredients. We are here to offer a solution to these challenges, and our focus is particularly on students who want to enjoy delicious meals. Even with limited resources and budget-friendly ingredients, you can still prepare and savor tasty dishes!"</p>    
            </div>

            <form onSubmit={handleSearchForm} className='mx-28 xl:mx-0 mt-4'>
                <div className='flex justify-center sm:mx-0 xl:mx-48 2xl:mx-0'>
                    <input onChange={handleIngredientsInput}  ref={inputRef} value={inputValue} className='placeholder-white focus:outline-none resize-none text-xl p-2 w-30 sm:w-full xl:w-94 h-20 bg-yellow-800 text-white rounded-md' placeholder='Enter your ingredients' required />
                </div>
                <div className='flex justify-center sm:justify-end pb-4 xl:pb-0'>
                    <button onClick={() => {searchRecipeButton(); setIsRecipeVisible(true); setIsRecipeDetailVisible(false)}}  type='submit' className='float-right self-end h-8 w-20 mt-2 mx-0 xl:mx-48 bg-yellow-800 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Search</button>  {/* IF input empty OR isRecipeAvailable IS TRUE, then SEARCH BUTTON WILL BE DISABLED */}
                </div>
            </form>

            {showNoRecipesMessage && (
                <p>No recipes found for the specified ingredients</p>
            )}

            {/* {recipes.map(recipe => ( */}
            {!isRecipeDetailVisible && isRecipeVisible && (
                <div>
                    <div className='flex justify-start mt-4 gap-1'>
                        <button onClick={backIntoSelectedRecipeDetail} disabled={isBackButtonDisabled} className={`h-8 w-56 ml-4 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900 ${isBackButtonDisabled ? 'bg-slate-100' : 'bg-yellow-800'}`}>back into selecetdRecipeDetail</button>
                        <button onClick={backIntoEmptyRecipe} className='h-8 w-20 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900'>⬅</button>
                    </div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {recipes.map(recipe => (
                            <div key={recipe.idMeal} className='border p-4'>
                                <h2 className='text-xl'>{recipe.meal}</h2>
                                <img src={recipe.mealThumb} alt={recipe.meal} className='w-full h-48 object-cover rounded-md' />
                                <div className='flex justify-end'>
                                    <button onClick={() => {handleRecipeDetail(recipe); setIsRecipeDetailVisible(true)}}  className='mt-2 bg-yellow-800 text-white px-1.5 py-1.5 rounded-md hover:cursor-pointer hover:bg-yellow-900'>Recipe</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={backIntoEmptyRecipe} className='h-8 w-full mt-2 mb-4 mx-0 xl:mx-4 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900'>⬅</button>
                    </div>
                </div>
            )}

            {/* {selectedRecipeDetail && ( */}
            {isRecipeDetailVisible && selectedRecipeDetail && (
                <div>
                    <button onClick={() => setIsRecipeDetailVisible(false)} className='mb-4 h-8 w-20 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900'>⬅</button>
                    <h2 className='text-xl mb-4'>Recipe Detail for: {selectedRecipeDetail.meal}</h2>
                    <img className='mb-4 w-96 h-72 object-cover rounded-md mx-auto sm:mx-0 block sm:inline' src={selectedRecipeDetail.mealThumb} alt={selectedRecipeDetail.meal} />
                    <h3>Ingredients:</h3>
                    <ul className='mb-4'>
                        {selectedRecipeDetail.ingredients.map((ingredient, i) => {
                            return <li key={i}>{ingredient}</li>
                        })}
                    </ul>
                    <h3>Cooking Instructions:</h3>
                    <p className='mb-4'>{selectedRecipeDetail.cookingInstructions}</p>
                    <div className='pb-4 flex justify-start gap-1'>
                        <button onClick={() => setIsRecipeDetailVisible(false)} className='h-12 sm:h-8 w-20 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900'>⬅</button>
                        <button onClick={addToFavorite} className='h-12 sm:h-8 w-52 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900'>Add To Favorite Recipe</button>
                        <button onClick={hideSelectedRecipeDetail} className='h-12 sm:h-8 w-56 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900'>Hide this selectedRecipeDetail</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Recipe