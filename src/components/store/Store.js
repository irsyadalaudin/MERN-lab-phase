import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/Reducer';

const store = configureStore(rootReducer);

export default store;