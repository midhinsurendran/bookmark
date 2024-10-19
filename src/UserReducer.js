import { createSlice } from "@reduxjs/toolkit";
import { UserAuth } from "./UserAuth";
import { Userdata } from "./Userdata";


const userSlice=createSlice(
    {
        name:'users',
        initialState:UserAuth,
        reducers:{
            addUser:(state,action)=>{
                state.push(action.payload)
            }

        }
    }
)

const authSlice=createSlice(
    {
        name:'auth',
        initialState:{user:null},
        reducers:{
            setUser:(state,action)=>{
                state.user=action.payload;
            },
            removeUser:(state)=>{
                state.user=null;
            }
        }
    }
)

const dataSlice=createSlice(
    {
        name:'data',
        initialState:Userdata,
        reducers:{
            addData:(state,action)=>{
                state.push(action.payload)
            },
            deleteData:(state, action) => {
                return state.filter(data => data.id !== action.payload);
            },
            updateData: (state, action) => {
                const { id, newData } = action.payload;
                const index = state.findIndex(user => user.id === id);
                if (index !== -1) {
                    state[index] = { ...state[index], ...newData };
                }
            },
    
        }
    }
)


const loginSlice = createSlice({
    name: 'Logins',
    initialState:{isLoggedIn:false},
    reducers: {
      login: (state, action) => {
        state.isLoggedIn = true;
      },
      logout: (state) => {
        state.isLoggedIn = false;
      },
    },
  });


export const {addUser}=userSlice.actions
export const {setUser,removeUser}=authSlice.actions
export const {addData,deleteData,updateData}= dataSlice.actions
export const {login,logout}=loginSlice.actions

export const UserReducer= userSlice.reducer
export const loginReducer =loginSlice.reducer
export const authReducer= authSlice.reducer
export const dataReducer= dataSlice.reducer