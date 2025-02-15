import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SubmissionData {
    firstName:string,
    lastName:string,
    email:string,
    company:string,
    country:string
}
interface FormState {
    submissions: SubmissionData [];
}
const initialState: FormState = {
    submissions: [],
};


export const formSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        addFormSubmission: (state, action: PayloadAction<SubmissionData >) => {
            state.submissions.push(action.payload);
        },
    },
});

export const { addFormSubmission } = formSlice.actions;
export default formSlice.reducer;
