import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer/Reducer'

// CONFIGURE AND CREATE THE REDUX STORE USING THE PROVIDED ROOT REDUCER
const store = configureStore({
    reducer: rootReducer
})

export default store