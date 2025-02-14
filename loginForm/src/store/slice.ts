import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState{
    firstName:string,
    lastName:string,
    email:string,
    company:string,
    country:string
}
const initialState:FormState={
    firstName:" ",
    lastName:'',
    email:'',
    company:'',
    country:''
}


export const formSlice= createSlice({
    name:'formData',
    initialState,
    reducers:{
        updateFormData: (state, action: PayloadAction<FormState>) => {
            return { ...state, ...action.payload }; 
        }
    }
})

export const {updateFormData} = formSlice.actions;
export default formSlice.reducer;