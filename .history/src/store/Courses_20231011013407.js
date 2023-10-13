import { createSlice } from "@reduxjs/toolkit";


const courseList = createSlice({
  name: "course",
  initialState : {
    value:
      {cat: 1,
        name: 'Intensification of money Laundering prevention-private customer advice',
        duration: 30,
        progress: 3,
        end: 'March 14, 2024',
       } 
      },

})
  
export default courseList
  // const courseReducer = (state = courses, action) => {
  //   return state
  // }
  
  // export default courseReducer