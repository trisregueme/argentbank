import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const modifyUsername = createAsyncThunk(
   'user/username',
   async ({ userName }) => {
      const token = sessionStorage.getItem('jwtToken');
      const response = await fetch(
         'http://localhost:3001/api/v1/user/profile',
         {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName }),
         }
      );
      if (!response.ok) {
         throw new Error("Error while modifying user's username");
      }
      const data = await response.json();
      return data.body;
   }
);

export const modifyUsernameSlice = createSlice({
   name: 'modify',
   initialState: { error: null, status: 'void' },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(modifyUsername.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(modifyUsername.fulfilled, (state, action) => {
            state.status = 'succeeded';
         })
         .addCase(modifyUsername.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
         });
   },
});
export default modifyUsernameSlice.reducer;
