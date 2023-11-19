import { useEffect, useRef, useState } from 'react'

const Account = () => {
    const [selectedTab, setSelectedTab] = useState('personal-information')
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [name, setName] = useState('Joko')
    const [userName, setUserName] = useState('joko0123')
    const [email, setEmail] = useState('jokomiyaw@gmail.com')
    const [favoriteFood, setFavoriteFood] = useState('')
    const [submitedFavoriteFood, setSubmitedFavoriteFood] = useState([])
    const [editFavoriteFood, setEditFavoriteFood] = useState({ id: null, text: '' })  // STATE FOR EDIT BUTTON
    const [favoriteRecipe, setFavoriteRecipe] = useState([])
    const editInputRef = useRef(null)

    const moveTab = (tabName) => {
        return () => {
            setSelectedTab(tabName)
        }
    }


    /* PERSONAL INFORMATION FUNCTION */
    const handleEdit = (id) => {
        setIsEditing(true)
        setEditId(id)
    }

    const handleEditName = () => {
        handleEdit('name')
    }

    const handleEditUserName = () => {
        handleEdit('userName')
    }

    const handleEditEmail = () => {
        handleEdit('email')
    }

    const editName = (e) => {
        setName(e.target.value)
    }

    const editUserName = (e) => {
        setUserName(e.target.value)
    }

    const editEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSave = () => {
        setIsEditing(false)
        setEditId(null)
    }

    const handleSaveWithEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSave()
        }
    }


    /* FAVORITE RECIPE FUNCTION */
    const updateLocalStorage = (updatedRecipes) => {
        localStorage.setItem('favorite-recipe', JSON.stringify(updatedRecipes))
    }

    useEffect(() => {
        const storedFavoriteRecipe = localStorage.getItem('favorite-recipe')
        if (storedFavoriteRecipe) {
            setFavoriteRecipe(JSON.parse(storedFavoriteRecipe))
        }
    }, [])

    const handleDeleteRecipe = (index) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this recipe?')
        if (isConfirmed) {
            const updatedRecipes = [...favoriteRecipe]
            updatedRecipes.splice(index, 1)
            setFavoriteRecipe(updatedRecipes)
            updateLocalStorage(updatedRecipes)
            alert('Favorite Recipe deleted successfully!')
        } else {
            alert('Deletion canceled !')
        }
    }

    const handleDeleteAllRecipes = () => {
        const isConfirmed = window.confirm('Are you sure you want to delete this recipe?')
        if (isConfirmed) {
            setFavoriteRecipe([])
            localStorage.removeItem('favorite-recipe')
            alert('All Favorite Recipes deleted successfully!')
        } else {
            alert('All Deletion canceled!')
        }
    }


    /* FAVORITE FOOD FUNCTION */
    const handleSubmit = (e) => {
        // USE CORRESPONDING INPUT BASED ON EDIT MODE 
        e.preventDefault()
        if (editFavoriteFood.id !== null) {
            // HANDLE SAVE AFTER EDIT
            handleSaveAfterEditFavoriteFood(editFavoriteFood.id)
        } else {
            // HANDLE SAVE AFTER ADD (WHEN THERE AREN'T NO EDITS)
            const newFavoriteFood = {
                id: Date.now(),
                favoriteFood
            }
            setSubmitedFavoriteFood([...submitedFavoriteFood, newFavoriteFood])
            setFavoriteFood('')
            console.log(submitedFavoriteFood)
        }
    }

    const handleFavoriteFood = (e) => {
        // UPDATE THE STATE ACCORDING TO THE ACTIVE INPUT 
        if  (editFavoriteFood.id !== null) {
            setEditFavoriteFood({ ...editFavoriteFood, text: e.target.value })
            // SPREAD OPERATOR IS A MORE COMMON AND RECOMMENDED USE
        } else {
            setFavoriteFood(e.target.value)
        }
    }

    const handleDeleteFavoriteFood = (id) => {
        const deleteFavoriteFood = submitedFavoriteFood.filter(food => food.id !== id)
        setSubmitedFavoriteFood(deleteFavoriteFood)
        console.log(deleteFavoriteFood)
        localStorage.removeItem('submitedFavoriteFood')
    }

    const handleDeleteAll = () => {
        setSubmitedFavoriteFood([])
        console.log(submitedFavoriteFood)
        localStorage.clear()
    }

    const handleEditFavoriteFood = (id) => {
        const editFavoriteFood = submitedFavoriteFood.find(food => food.id === id)
        setEditFavoriteFood({ id, text: editFavoriteFood.favoriteFood })
        // SHORTHAND PROPERTY. IF THE PROPERTY NAME IN THE OBJECT IS THE SAME AS THE NAME OF THE VARIABLE THAT STORES IT
    }

    const handleSaveAfterEditFavoriteFood = (id) => {
        const updatetFavoriteFoodList = submitedFavoriteFood.map((food) => {
            if (food.id === id) {
                return { ...food, favoriteFood: editFavoriteFood.text }
            } else {
                return food
            }
        })
        setSubmitedFavoriteFood(updatetFavoriteFoodList)
        setEditFavoriteFood({ id: null, text:'' })        // RESET EDIT MODE
    }

    useEffect(() => {
        if (editFavoriteFood.id !== null) {
            editInputRef.current.focus()
        }
    }, [editFavoriteFood.id])

    useEffect(() => {
        const storedData = localStorage.getItem('submitedFavoriteFood');
        if (storedData) {
            setSubmitedFavoriteFood(JSON.parse(storedData));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('submitedFavoriteFood', JSON.stringify(submitedFavoriteFood));
    }, [submitedFavoriteFood])


    return (
        <div id='container' className='bg-yellow-600 px-10 md:px-28 h-full'>
            <div className='text-center pt-4'>
                <h1 className='text-4xl'>Account</h1>
                <p className='text-2xl'>Manage your personal information, including phone numbers and email address where you can be contacted</p>
            </div>
            <div className='md:flex gap-14'>
                <div className='md:w-1/3 mt-5'>
                    <div className='flex flex-row md:flex-col gap-1 mb-8 md:mb-2,5'>
                        <button onClick={moveTab('personal-information')} className='bg-yellow-800 rounded-md text-white xl:w-80 h-14 mb-2'>Personal Information</button>
                        <button onClick={moveTab('recipe-history')} className='bg-yellow-800 rounded-md text-white xl:w-80 h-14 mb-2'>Recipe History</button>
                        <button onClick={moveTab('favorite-recipe')} className='bg-yellow-800 rounded-md text-white xl:w-80 h-14 mb-2'>Favorite Recipe</button>
                        <button onClick={moveTab('favorite-food')} className='bg-yellow-800 rounded-md text-white xl:w-80 h-14 mb-2'>Favorite Food</button>
                        <button onClick={moveTab('account-setting')} className='bg-yellow-800 rounded-md text-white xl:w-80 h-14 mb-2'>Account Setting</button>
                    </div>
                </div>
                <div className='md:w-2/3 mt-5'>
                    {selectedTab === 'personal-information' && (
                        <form action='#'>
                            <div>
                                <label className='block' htmlFor='name'>Name:</label>
                                <input className='rounded-md' onChange={editName} onKeyDown={handleSaveWithEnter} type='text' value={name} disabled={!isEditing || (editId && editId !== 'name') } autoComplete='off'/>
                                <button className='rounded-md' onClick={handleEditName}>✎</button>
                                <button className='rounded-md' onClick={handleSave}>save</button>
                            </div>
                            <div>
                                <label className='block' htmlFor='userName'>Username:</label>
                                <input className='rounded-md' onChange={editUserName} onKeyDown={handleSaveWithEnter} type='text' value={userName} disabled={!isEditing || (editId && editId !== 'userName') } autoComplete='off'/>
                                <button className='rounded-md' onClick={handleEditUserName}>✎</button>
                                <button className='rounded-md' onClick={handleSave}>save</button>
                            </div>
                            <div>
                                <label className='block' htmlFor='email'>Email:</label>
                                <input className='rounded-md' onChange={editEmail} onKeyDown={handleSaveWithEnter} type='text' value={email} disabled={!isEditing || (editId && editId !== 'email') } autoComplete='off'/>
                                <button className='rounded-md' onClick={handleEditEmail}>✎</button>
                                <button className='rounded-md' onClick={handleSave}>save</button>
                            </div>
                        </form>
                    )}

                    {selectedTab === 'favorite-recipe' && (
                        <div>
                            <h2 className='mb-4'>Favorite Recipe:</h2>
                                {favoriteRecipe.map((recipe, index) => (
                                    <div className='mb-4' key={index}>
                                        <h2 className='text-xl mb-4'>{recipe.favoriteRecipeMeal}</h2>
                                        <img className='mb-4 w-96 h-72 object-cover rounded-md mx-auto sm:mx-0 block sm:inline' src={recipe.favoriteRecipeThumb} alt={recipe.meal} />
                                        <h3>Ingredients:</h3>
                                        <ul className='mb-4'>
                                            {recipe.favoriteRecipeIngredients.map((ingredient, index) => (
                                                <li key={index}>{ingredient}</li>
                                            ))}
                                        </ul>
                                        <h3>Cooking Instructions:</h3>
                                        <p className='mb-4'>{recipe.favoriteRecipeCookingInstructions}</p>
                                        <button className='h-12 sm:h-8 w-16 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900' onClick={() => handleDeleteRecipe(index)}>Delete</button>
                                    </div>
                                ))}
                                {favoriteRecipe.length > 0 && (
                                    <button className='mb-4 h-12 sm:h-8 w-30 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900' onClick={handleDeleteAllRecipes}>Delete All Recipes</button>
                                )}
                        </div>
                    )}

                    {selectedTab === 'favorite-food' && (
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label className='block mb-1' htmlFor='favoriteFood'>Favorite Food:</label>
                                <input className='rounded-md block mb-2 w-60' type='text' placeholder='Enter your favorite food here' value={favoriteFood} onChange={handleFavoriteFood} />
                                <div className='flex w-62'>
                                    <button className='bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900 ml-auto' type='submit'>submit</button>
                                </div>
                            </form>
                            <ol>
                                {submitedFavoriteFood.map((food) => (
                                    <li className='w-64' key={food.id}>
                                        {editFavoriteFood.id === food.id ? (
                                            <form onSubmit={() => handleSaveAfterEditFavoriteFood(food.id)}>
                                                <input className='bg-transparent outline-none border-none text-base' type='text' value={editFavoriteFood.text} onChange={handleFavoriteFood} ref={editInputRef} />
                                                <button className='bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900' type='submit'>✔</button>
                                            </form>
                                        ) : (
                                            // <form className='flex items-center w-52'>
                                            //     {food.favoriteFood}
                                            //     <div className='ml-auto'>
                                            //         <button className='bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900' onClick={() => handleDeleteFavoriteFood(food.id)}>✖</button>
                                            //         <button className='bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900' onClick={() => handleEditFavoriteFood(food.id)}>✎</button>
                                            //     </div>
                                            // </form>
                                            <form className='flex justify-between w-52'>
                                                {food.favoriteFood}
                                                <div className=''>
                                                    <button className='mb-1 ml-1 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900' onClick={() => handleDeleteFavoriteFood(food.id)}>✖</button>
                                                    <button className='mb-1 ml-1 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900' onClick={() => handleEditFavoriteFood(food.id)}>✎</button>
                                                </div>
                                            </form>
                                        )}
                                    </li>
                                ))}
                            </ol>
                            {submitedFavoriteFood.length > 0 && (
                                    <button className='bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900' onClick={handleDeleteAll}>deleteAll</button>
                                )
                            }
                        </div>
                    )}

                    {selectedTab === 'account-setting' && (
                        <form>
                            <div>
                                <label className='block' htmlFor='currentPassword'>Current Password:</label>
                                <input className='rounded-md' type='password' placeholder='*****' />
                            </div>
                            <div>
                                <label className='block' htmlFor='newPassword'>New Password:</label>
                                <input className='rounded-md' type='password' placeholder='*****' />
                            </div>
                            <div>
                                <label className='block' htmlFor='confirmNewPassword'>Confirm New Password:</label>
                                <input className='rounded-md' type='password' placeholder='*****' />
                            </div>
                            <button className='mt-3 bg-yellow-800 text-white rounded-md hover:cursor-pointer hover:bg-yellow-900'>Save</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Account