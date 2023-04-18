import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './menuState';
import bgReducer from './bgState';

export default configureStore({
    reducer: {
        menu: menuReducer,
        bg: bgReducer
    },
});