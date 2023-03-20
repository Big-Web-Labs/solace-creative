import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './menuState';
import searchReducer from './searchState';

export default configureStore({
    reducer: {
        menu: menuReducer,
        searchR: searchReducer,
    },
});