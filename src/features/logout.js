import { createSlice } from "@reduxjs/toolkit";

const sessionLogoutSlice = createSlice({
    name: 'session',
    initialState: { token: null},
    reducers: {
        logout: (state) => {
            state.token = null
        }
    }
})

export const { logout } = sessionLogoutSlice.actions

export default sessionLogoutSlice.reducer

//il faudra relier l'action de ce slice au bouton de déconnexion sur la page de l'utilisateur
//Bouton qui devra apparaitre que si le user est connecté donc si !state.token