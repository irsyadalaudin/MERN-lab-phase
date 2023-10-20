import { useEffect, useRef, useState } from 'react'

const Account = () => {
    const [selectedTab, setSelectedTab] = useState('personal-information')
    const [contentExceddHeight, setContentExceddHeight] = useState(false)
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


    /* RECIPE HISTORY FUNCTION */
    // USE EFFECT FOR BACKGROUND STYLING
    useEffect(() => {
        const container = document.getElementById('container')
        const contentHeight = container.scrollHeight
        const containerHeight = container.clientHeight

        if (contentHeight > containerHeight) {
            setContentExceddHeight(true)
        } else {
            setContentExceddHeight(false)
        }
    }, [selectedTab])

    const containerStyle = `bg-yellow-600 px-28 ${contentExceddHeight ? 'h-full' : 'h-90'}`


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
    }

    const handleDeleteAll = () => {
        setSubmitedFavoriteFood([])
        console.log(submitedFavoriteFood)
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
        setEditFavoriteFood({ id: null, text:'' })  // RESET EDIT MODE
    }

    useEffect(() => {
        if (editFavoriteFood.id !== null) {
            editInputRef.current.focus()
        }
    }, [editFavoriteFood.id])

    /* FAVORITE FOOD */
    useEffect(() => {
        const storedFavoriteRecipe = localStorage.getItem('favorite-recipe')
        if (storedFavoriteRecipe) {
            const parsedFavoriteRecipe = JSON.parse(storedFavoriteRecipe)
            setFavoriteRecipe(parsedFavoriteRecipe)
        }
    }, [])


    return (
        <div id='container' className={containerStyle}>
            <div className='text-center pt-8'>
                <h1 className='pb-4 text-4xl'>Account</h1>
                <p className='text-2xl'>Manage your personal information, including phone numbers and email address where you can be contacted</p>
            </div>
            <div className='flex flex-grow gap-14'>
                <div className='w-1/3 mt-5'>
                    <div className='flex flex-col'>
                        <button onClick={moveTab('personal-information')} className='bg-transparent h-24'>Personal Information</button>
                        <button onClick={moveTab('recipe-history')} className='bg-transparent h-24'>Recipe History</button>
                        <button onClick={moveTab('favorite-recipe')} className='bg-transparent h-24'>Favorite Recipe</button>
                        <button onClick={moveTab('favorite-food')} className='bg-transparent h-24'>Favorite Food</button>
                        <button onClick={moveTab('account-setting')} className='bg-transparent h-24'>Account Setting</button>
                    </div>
                </div>
                <div className='w-2/3 mt-5'>
                    {selectedTab === 'personal-information' && (
                        <form action='#'>
                            <div>
                                <label className='block' htmlFor='name'>Name:</label>
                                <input onChange={editName} onKeyDown={handleSaveWithEnter} type='text' value={name} disabled={!isEditing || (editId && editId !== 'name') } autoComplete='off'/>
                                <button onClick={handleEditName}>✎</button>
                                <button onClick={handleSave}>save</button>
                            </div>
                            <div>
                                <label className='block' htmlFor='userName'>Username:</label>
                                <input onChange={editUserName} onKeyDown={handleSaveWithEnter} type='text' value={userName} disabled={!isEditing || (editId && editId !== 'userName') } autoComplete='off'/>
                                <button onClick={handleEditUserName}>✎</button>
                                <button onClick={handleSave}>save</button>
                            </div>
                            <div>
                                <label className='block' htmlFor='email'>Email:</label>
                                <input onChange={editEmail} onKeyDown={handleSaveWithEnter} type='text' value={email} disabled={!isEditing || (editId && editId !== 'email') } autoComplete='off'/>
                                <button onClick={handleEditEmail}>✎</button>
                                <button onClick={handleSave}>save</button>
                            </div>
                        </form>
                    )}

                    {selectedTab === 'recipe-history' && (
                        <div>

                        </div>
                    )}

                    {selectedTab === 'favorite-recipe' && (
                        <div>
                            <h2>Favorite Recipe:</h2>
                                {favoriteRecipe.map((recipe, index) => (
                                    <div key={index}>
                                        <h2>{recipe.favoriteRecipeName}</h2>
                                        <img src={recipe.favoriteRecipeThumb} alt={recipe.strMeal} />
                                        <h3>Ingredients:</h3>
                                        <ul>
                                        {Array.from({ length: 20 }, (v, index) => index + 1)
                                            .filter((ingredientIndex) => recipe[`favoriteRecipeIngredients${ingredientIndex}`])
                                            .map((ingredientIndex) => (
                                            <li key={ingredientIndex}>
                                                {recipe[`favoriteRecipeIngredients${ingredientIndex}`]} -{' '}
                                                {/* {recipe[`strMeasure${ingredientIndex}`]} */}
                                            </li>
                                            ))}
                                        </ul>
                                        <h3>Cooking Instructions:</h3>
                                        <p>{recipe.favoriteRecipeInstructions}</p>
                                    </div>
                                ))}
                        </div>
                    )}

                    {selectedTab === 'favorite-food' && (
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label className='block' htmlFor='favoriteFood'>Favorite Food:</label>
                                <input className='block w-60' type='text' placeholder='Enter your favorite food here' value={favoriteFood} onChange={handleFavoriteFood} />
                                <div className='flex w-62 mt-0.5'>
                                    <button className='ml-auto' type='submit'>submit</button>
                                </div>
                            </form>
                            <ol>
                                {submitedFavoriteFood.map((food) => (
                                    <li className='w-64' key={food.id}>
                                        {editFavoriteFood.id === food.id ? (
                                            <form onSubmit={() => handleSaveAfterEditFavoriteFood(food.id)}>
                                                <input className='bg-transparent outline-none border-none text-base' type='text' value={editFavoriteFood.text} onChange={handleFavoriteFood} ref={editInputRef} />
                                                <button type='submit'>✔</button>
                                            </form>
                                        ) : (
                                            <form className='flex items-center w-52'>
                                                {food.favoriteFood}
                                                <div className='ml-auto'>
                                                    <button onClick={() => handleDeleteFavoriteFood(food.id)}>✖</button>
                                                    <button onClick={() => handleEditFavoriteFood(food.id)}>✎</button>
                                                </div>
                                            </form>
                                        )}
                                    </li>
                                ))}
                            </ol>
                            {submitedFavoriteFood.length > 0 && (
                                    <button onClick={handleDeleteAll}>deleteAll</button>
                                )
                            }
                        </div>
                    )}

                    {selectedTab === 'account-setting' && (
                        <form>
                            <div>
                                <label className='block' htmlFor='currentPassword'>Current Password:</label>
                                <input type='password' placeholder='*****' />
                            </div>
                            <div>
                                <label className='block' htmlFor='newPassword'>New Password:</label>
                                <input type='password' placeholder='*****' />
                            </div>
                            <div>
                                <label className='block' htmlFor='confirmNewPassword'>Confirm New Password:</label>
                                <input type='password' placeholder='*****' />
                            </div>
                            <button>Save</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Account