import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface Data {
    name: string,
    lastname: string,
    email: string,
    password: string

}
export interface IUsers {
    name: string,
    lastname: string,
    email: string,
    password: string,
    block: boolean,
    admin: boolean
}
interface Application{
    error: null | string | unknown,
    singingUp: boolean,
    singinIn: boolean
    token: string | null
    users: IUsers[]

}

const initialState: Application = {
    users:[],
    error: null,
    singingUp: false,
    singinIn: false,
    token: localStorage.getItem('token')
}

export const authSigUp = createAsyncThunk<void, Data, {rejectValue: string | unknown}>(
    'auth-sigUp',
    async ({name, lastname, email, password}, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:4000/users", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({name, lastname, email, password})
            })
            const json = await res.json()
            if(json.error){
                return thunkAPI.rejectWithValue(json.error)
            }
            return json
            
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

export const fetchUsers = createAsyncThunk<IUsers[], void, {rejectValue: string | unknown}>(
    'users/fetch',
    async (_, thunkAPI) => {
        try {
            
            const res = await fetch('http://localhost:4000/users', {
              
            })
            const users = await res.json()
            if(users.error) {
                return thunkAPI.rejectWithValue(users.error)
            }
            return users
            
        } catch (error) {
           return thunkAPI.rejectWithValue(error) 
        }
    }
)

export const authSignIn = createAsyncThunk<string,{email: string, password: string}, {rejectValue: string | unknown}>(
    'auth/signIn',
    async ({email, password}, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:4000/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            })
            const token = await res.json()
            if(token.error){
                return thunkAPI.rejectWithValue(token.error)
            }
            localStorage.setItem("token", token.token)
            return token.token
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authSigUp.fulfilled, (state, action) => {
            state.singingUp = true
        })
        .addCase(authSigUp.rejected, (state, action) => {
            state.error = action.payload
        })
        .addCase(authSignIn.fulfilled, (state, action) => {
            state.singinIn = true
            state.token = action.payload
        } )
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export default applicationSlice.reducer