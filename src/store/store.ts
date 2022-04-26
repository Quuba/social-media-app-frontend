import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ChangeUserDataService} from "../services/ChangeUserDataService";
interface IPublicUserData{

    username:string;

}
interface IUserDataSliceState extends IPublicUserData{
    email: string;
}
const initialState:IUserDataSliceState = {
    username:'username_not_set',
    email:'email_not_set'
};

export const userDataSlice = createSlice(
    {
        name: 'userData',
        initialState:initialState,
        reducers:{
            testReducer:(state:IUserDataSliceState)=>{

            },
            setUsername:(state:IUserDataSliceState, action:PayloadAction<string>)=>{
                state.username = action.payload;
            },

            changeUsername:(state:IUserDataSliceState, action:PayloadAction<string>)=>{
                console.log('test2')
                ChangeUserDataService.changeUsername(action.payload)
                state.username = action.payload;
            },
            changeEmail:(state:IUserDataSliceState, action:PayloadAction<string>)=>{
                state.email = action.payload;
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

export const {setUsername, changeUsername} = userDataSlice.actions


export const selectUserData = (state: RootState) => state.userData;

export default store