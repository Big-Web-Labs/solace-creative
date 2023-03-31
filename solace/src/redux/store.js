import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './menuState';

export default configureStore({
    reducer: {
        menu: menuReducer,
    },
});