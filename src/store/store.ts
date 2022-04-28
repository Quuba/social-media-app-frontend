import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ChangeUserDataService} from "../services/ChangeUserDataService";
interface IPublicUserData{

    username:string;
    image: string|null,
    posts: [],
    following: [],
    description:string|null;
    verified:boolean

}

interface IUserData extends IPublicUserData{
    description: string|null
    email: string
    following: []
    image: string|null
    posts: []
    role: string
    username: string
}
interface IUserDataSliceState extends IUserData{

}

const initialState:IUserDataSliceState = {
    following: [],
    image: null,
    posts: [],
    username:'username_not_set',
    description: "set your description",
    email:'set your email',
    role: "ROLE_UNVERIFIED",
    verified:false
};

export const userDataSlice = createSlice(
    {
        name: 'userData',
        initialState:initialState,
        reducers:{
            testReducer:(state:IUserDataSliceState)=>{

            },
            setUsername:(state:IUserDataSliceState, action:PayloadAction<string>)=>{
                // console.log('dispatch setUsername')
                state.username = action.payload;
            },
            setDescription:(state:IUserDataSliceState, action:PayloadAction<string>)=>{
                // console.log('dispatch setDescription')
                state.description = action.payload;
            },
            setEmail:(state:IUserDataSliceState, action:PayloadAction<string>)=>{
                state.email = action.payload;
                // console.log('dispatch setEmail')
            },
            setVerified:(state:IUserDataSliceState, action:PayloadAction<boolean>)=>{
                state.verified = action.payload;
                // console.log('dispatch setVerified')
            },
        }
    }
)

const store = configureStore({
    reducer: {
        userData: userDataSlice.reducer
    },
})
export type RootState = ReturnType<typeof store.getState>

export const {setUsername, setDescription, setEmail, setVerified} = userDataSlice.actions
export type {IUserData, IPublicUserData}

export const selectUserData = (state: RootState) => state.userData;

export default store