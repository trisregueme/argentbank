import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk('user/login', async ({ email, password }) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    if (!response.ok) {
        throw new Error('Login failed')
    }
    const data = await response.json()
    const token = data.body.token
    sessionStorage.setItem('jwtToken', token)
    return token
})

const initialState = {
    user: null,
    status: 'void',
    error: null,
    token: null,
}

const userLoginSlice = createSlice({
    name:'user',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loginUser.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(loginUser.fulfilled, (state, action) => {
                    state.status = 'succeeded'
                    state.token = action.payload
                })
                .addCase(loginUser.rejected, (state, action) => {
                    state.status = 'failed'
                    state.error = action.error.message
                })
        }
})
export default userLoginSlice.reducer