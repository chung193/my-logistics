import authReducer from './authReducer'
import commonReducer from './commonReducer'

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        auth: authReducer,
        common: commonReducer
    }
})
export default store
