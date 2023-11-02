export const setIngredients = (ingredients) => ({
    type: 'SET_INGREDIENTS',
    ingredients
})

export const setRecipes = (recipes) => ({
    type: 'SET_RECIPES',
    recipes
})

export const setSelectedRecipeDetail = (selectedRecipeDetail) => ({
    type: 'SET_SELECTED_RECIPE_DETAIL',
    selectedRecipeDetail
})

export const clearSelectedRecipeDetail = () => ({
    type: 'SET_SELECTED_RECIPE_DETAIL',
    selectedRecipeDetail: undefined
})

export const setContentExceedHeight = (contentExceedHeight) => ({
    type: 'SET_CONTENT_EXCEED_HEIGHT',
    contentExceedHeight
})

export const clearContentExceedHeight = () => ({
    type: 'SET_CONTENT_EXCEED_HEIGHT',
    contentExceedHeight: false,
})