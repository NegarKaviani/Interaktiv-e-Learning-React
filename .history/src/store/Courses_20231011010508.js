import { createSlice } from '@reduxjs/toolkit';


const courseSlice = createSlice({
    name: 'courses',
    initialState: { value: { category: 0 ,name: "" , duration: 0 , progress: 0} }
})