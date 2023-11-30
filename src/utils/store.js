import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/login'
import sessionReducer from '../features/logout'
import fetchReducer from '../features/userprofile'

export default configureStore({
    reducer: {
        user: userReducer,
        session: sessionReducer,
        profile: fetchReducer,
    },
})

// tony@stark.com
// password123

// steve@rogers.com
// password456