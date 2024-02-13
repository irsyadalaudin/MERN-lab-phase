/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {
    setIngredients,
    setRecipes,
    setSelectedRecipeDetail,
    clearSelectedRecipeDetail,
    setContentExceedHeight,
    clearContentExceedHeight,
} from './store/action/Action'

const Recipe = () => {
    const ingredients = useSelector((state) => state.ingredients)
    const recipes = useSelector((state) => state.recipes)
    const selectedRecipeDetail = useSelector((state) => state.selectedRecipeDetail)
    const contentExceedHeight = useSelector((state) => state.contentExceedHeight)
    const dispatch = useDispatch()

    const [showNoRecipesMessage, setShowNoRecipesMessage] = useState(false)
    const [isRecipeVisible, setIsRecipeVisible] = useState(false)
    const [isRecipeDetailVisible, setIsRecipeDetailVisible] = useState(false)
    const [isBackButtonDisabled, setIsBackButtonDisabled] = useState(true)
    const [inputValue, setInputValue] = useState('')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const inputRef = useRef(null)

    const searchRecipeButton = async () => {
        /* 1st METHOD */
        // try {
        //     console.log(ingredients)
        //     // USE Set() TO SAVE UNIQUE RECIPES
        //     const uniqueRecipes = new Set()
        //     /* const { data } = await axios.get('http://localhost:4000/') */
        //     const { data } = await axios.get('https://mern-backend-us5i.onrender.com/')
        //     // LOOPING TO SEARCH FOR INGREDIENTS THAT WILL BRING UP THE RECIPE
        //     for (let i = 0; i < data.recipe.length; i++) {
        //         const res = data.recipe[i]
        //         for (let x = 0; x < res.ingredients.length; x++) {
        //             const ingredient = res.ingredients[x].toLowerCase()
        //             for (let y = 0; y < ingredients.length; y++) {
        //                 if (ingredient.toLowerCase().includes(ingredients[y].toLowerCase())) {
        //                     // ADD RECIPE TO Set()
        //                     uniqueRecipes.add(res)
        //                     // BREAK THE INNER LOOP ONCE A MATCH IS FOUND
        //                     break                              
        //                 }
        //             }
        //         }
        //     }
    /* 2nd METHOD */
        try {
            console.log(ingredients)
            // USE Set() TO SAVE UNIQUE RECIPES
            const uniqueRecipes = new Set()
            const { data } = await axios.get('https://mern-backend-us5i.onrender.com/')
            // ITERATE THROUGH EACH RECIPE AND CHECK IF AT LEAST ON EINGREDIENT MATCHES THE SEARCHED INGREDIENT
            data.recipe.forEach(recipe => {
                // TO CHECK IF EACH INGREDIENT IN THE RECIPE MATCHES THE SEARCHED INGREDIENT
                // if (recipe.ingredients.some(ingredient => ingredients.includes(ingredient.toLowerCase()))) {
                //     uniqueRecipes.add(recipe);
                // }
                // TO CHECK IF EACH INGREDIENT IN THE RECIPE MATCHES AT LEAST ONE SEARCH KEYWORD
                if (ingredients.some(searchTerm => recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase())))) {
                    uniqueRecipes.add(recipe)
                }
            })
            /* METHODS 1st AND 2nd USE THE SAME STEPS BELOW: */
            // CONVERT Set() BACK TO ARRAY
            const arr = Array.from(uniqueRecipes)
            dispatch(setRecipes(arr || []))
            setShowNoRecipesMessage(arr.length === 0)
            // UPDATE THE STORED RECIPE HISTORY IF NEEDED
            const previousIngredients = JSON.parse(localStorage.getItem('recipe-history')) || []
            // USE SET TO REMOVE DUPLICATES
            const newIngredients = [...new Set([...previousIngredients, ...ingredients.map(i => i.toLowerCase())])]
            localStorage.setItem('recipe-history', JSON.stringify(newIngredients))
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
    }

    const handleIngredientsInput = (e) => {
        const input = e.target.value.toLowerCase()
        const ingredientsArray = input.split(/[,]/).filter((ingredient) => ingredient.length > 0)
        dispatch(setIngredients(ingredientsArray))
        setIngredients(ingredientsArray)
        const value = e.target.value
        setInputValue(value)
        setShowNoRecipesMessage(false)
        // UPDATING localStorage ONLY WITH THE LAST INPUT BEFORE SUBMITING ingrediients
        if  (e.key === 'Enter') {
            const lastInput = ingredientsArray[ingredientsArray.length - 1]
            const storedInputs = JSON.parse(localStorage.getItem('recipe-history')) || []
            // STORE USER INPUT IN localStorage
            if (!storedInputs.includes(lastInput)) {
                const newInputs = [...storedInputs, lastInput]
                localStorage.setItem('recipe-history', JSON.stringify(newInputs))
            }
        }
    }

    const backIntoEmptyRecipe = () => {
        setIsRecipeVisible(false)
        dispatch(clearContentExceedHeight())
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

    // USE EFFECT FOR RECIPE HISTORY localStorage
    useEffect(() => {
        const storedRecipeHistory = localStorage.getItem('recipe-history')
        if (storedRecipeHistory) {
            const parsedRecipeHistory = JSON.parse(storedRecipeHistory)
            dispatch(setRecipes(parsedRecipeHistory))
        }
    }, [dispatch])

    // USE EFFECT FOR FAVORITE FOOD localStorage
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
                        {recipes.map((recipe, index) => (
                            <div key={recipe.idMeal || index} className='border p-4'>
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
                        {selectedRecipeDetail.ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient}</li>
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


/* searchRecipeButton FUNCTION EXPLANATION :

1.  const searchRecipeButton = async () => {:                                     Ini adalah deklarasi fungsi asynchronous bernama searchRecipeButton.
2.  console.log(ingredients):                                                     Ini adalah perintah untuk mencetak ke konsol nilai dari variabel ingredients. Namun, kode ini tidak akan berfungsi jika ingredients tidak didefinisikan di lingkungan saat fungsi dipanggil.
3.  const uniqueRecipes = new Set():                                              Ini adalah inisialisasi objek Set yang digunakan untuk menyimpan resep-resep unik yang ditemukan. Objek Set adalah struktur data yang hanya menyimpan nilai unik, sehingga resep yang duplikat akan dihapus.
4.  const { data } = await axios.get('https://mern-backend-us5i.onrender.com/'):  Ini adalah penggunaan axios untuk melakukan HTTP GET request ke URL yang disediakan (https://mern-backend-us5i.onrender.com/), yang akan mengembalikan data resep.
5.  for (let i = 0; i < data.recipe.length; i++) { ... }:                         Ini adalah loop untuk mengiterasi melalui setiap resep yang diterima dari respons API.
6.  const res = data.recipe[i]:                                                   Ini adalah penugasan variabel res dengan satu resep dari array resep yang diterima.
7.  for (let x = 0; x < res.ingredients.length; x++) { ... }:                     Ini adalah loop nested untuk mengiterasi melalui setiap bahan dalam resep saat ini.
8.  const ingredient = res.ingredients[x].toLowerCase():                          Ini adalah penugasan variabel ingredient dengan satu bahan dari resep saat ini yang sudah diubah menjadi huruf kecil.
9.  for (let y = 0; y < ingredients.length; y++) { ... }:                         Ini adalah loop nested lainnya untuk mencocokkan bahan dari resep dengan bahan yang dicari (variabel ingredients).
10. if (ingredient.toLowerCase().includes(ingredients[y].toLowerCase())) { ... }: Ini adalah kondisi untuk memeriksa apakah bahan dari resep saat ini mengandung bahan yang sedang dicari.
11. uniqueRecipes.add(res):                                                       Jika ada kecocokan, resep saat ini ditambahkan ke objek Set uniqueRecipes.
12. break:                                                                        Ini adalah perintah untuk keluar dari loop saat ini setelah resep ditambahkan ke uniqueRecipes.
13. const arr = Array.from(uniqueRecipes):                                        Ini adalah konversi objek Set uniqueRecipes kembali menjadi array.
14. dispatch(setRecipes(arr || [])):                                              Ini adalah pemanggilan fungsi dispatch dengan parameter arr atau array kosong (jika arr kosong), yang kemungkinan akan mengirimkan resep-resep ke suatu tempat (misalnya, ke Redux store).
15. setShowNoRecipesMessage(arr.length === 0 ? true : false):                     Ini adalah penyesuaian tampilan berdasarkan apakah ada resep yang ditemukan atau tidak.
16. const previousIngredients = JSON.parse(localStorage.getItem('recipe-history')) || []:                    Ini adalah mendapatkan data bahan sebelumnya dari localStorage dan menginisialisasi dengan array kosong jika tidak ada data yang tersimpan.
17. const newIngredients = [...new Set([...previousIngredients, ...ingredients.map(i => i.toLowerCase())])]: Ini adalah menggabungkan bahan-bahan sebelumnya dengan bahan yang baru dicari dan menghapus duplikat menggunakan objek Set.
18. localStorage.setItem('recipe-history', JSON.stringify(newIngredients)):                                  Ini adalah menyimpan bahan yang sudah dicari ke localStorage dengan nama kunci 'recipe-history'.
*/

