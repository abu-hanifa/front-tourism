import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
const initialState = {
    users:[],
    loading: false,
    error:null

}

export const fetchUsers = createAsyncThunk(
    'fetch/users',
    async (_, thunkAPI)=>{
        try{
            const res = await fetch('http://localhost:4000/usrs')
            const users = res.json()
            return users
        }
        catch(err){
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const userSlice = createSlice({
    name: 'users', 
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.fulfilled,(state, action)=>{
            state.users=action.payload;
            state.loading=false
        })
        .addCase(fetchUsers.pending,(state, action)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchUsers.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default userSlice.reducer