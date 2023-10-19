import { configureStore }  from '@reduxjs/toolkit';
import courseReducer from './store/coursesReducer.ts';


const store = configureStore({
    reducer:{
       courses: courseReducer,
    }
  })

export default store;