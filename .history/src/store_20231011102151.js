import { configureStore }  from '@reduxjs/toolkit';
import courseReducer from "./store/coursesReducer";


const store = configureStore({
    reducer:{
       courses: courseReducer,
    }
  })

{console.log({store})}
export default store;