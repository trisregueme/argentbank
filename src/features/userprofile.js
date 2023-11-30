import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserProfile = createAsyncThunk('user/profile', async ({ token }) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    if (!response.ok) {
        throw new Error("Fetching Users' profile failed")
    }
    const data = await response.json()
    console.log(data.body)
    return data.body
})

const userFetchinglice = createSlice({
    name:'profile',
    initialState: { infos: null, error: null, status: 'void' },
    reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchUserProfile.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(fetchUserProfile.fulfilled, (state, action) => {
                    state.status = 'succeeded'
                    state.infos = action.payload
                })
                .addCase(fetchUserProfile.rejected, (state, action) => {
                    state.status = 'failed'
                    state.error = action.error.message
                })
        }
})
export default userFetchinglice.reducer
