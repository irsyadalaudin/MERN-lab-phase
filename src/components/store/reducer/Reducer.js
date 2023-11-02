import { combineReducers } from '@reduxjs/toolkit';

const ingredientsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INGREDIENTS':
            return action.ingredients;
        default:
            return state
    }
}

const recipesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECIPES':
            return action.recipes;
        default:
            return state
    }
}

// const initialState = undefined
const selectedRecipeDetailReducer = (state = undefined, action) => {
    switch (action.type) {
        case 'SET_SELECTED_RECIPE_DETAIL':
            return action.selectedRecipeDetail;
        case 'CLEAR_SELECTED_RECIPE_DETAIL':
            return undefined
        default:
            return state
    }
}

const contentExceedHeightReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_CONTENT_EXCEED_HEIGHT':
            return action.contentExceedHeight;
        case 'CLEAR_CONTENT_EXCEED_HEIGHT':
            return false
        default:
            return state
    }
}

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    recipes: recipesReducer,
    selectedRecipeDetail: selectedRecipeDetailReducer,
    contentExceedHeight: contentExceedHeightReducer,
})

export default rootReducer