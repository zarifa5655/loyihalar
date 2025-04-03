import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState {
    user: { name: string; email:string} | null; 
}
const initialState:UserState = {
    user: null,
}
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ name: string; email:string}>) => {
            state.user=action.payload
        }
    }
})
export const {setUser}=userSlice.actions
export default userSlice.reducer
