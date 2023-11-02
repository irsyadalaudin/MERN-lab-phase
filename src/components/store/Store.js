import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '.reducer/Reducer';

const Store = configureStore(rootReducer);

export default Store;