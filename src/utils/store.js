import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/login'
import fetchReducer from '../features/userprofile'
import usernameReducer from '../features/username'

export default configureStore({
    reducer: {
        user: userReducer,
        profile: fetchReducer,
        modify: usernameReducer,
    },
})

// tony@stark.com
// password123

// steve@rogers.com
// password456