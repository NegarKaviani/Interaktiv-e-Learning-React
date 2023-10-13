import { createSlice } from "@reduxjs/toolkit";


const courses = {
    courses:[
      {cat: 1,
       name: 'Intensification of money Laundering prevention-private customer advice',
       duration: 30,
       progress: 3,
       end: 'March 14, 2024',
      } ,
      {cat: 2,
        name: 'It security and information security',
        duration: 30,
        progress: 3,
        end: 'March 14, 2024',
       },
       {cat: 3,
        name: 'Data Protection',
        duration: 30,
        progress: 3,
        end: 'March 14, 2024',
       },
       {cat: 4,
        name: 'WpHG-compliance',
        duration: 30,
        progress: 3,
        end: 'March 14, 2024',
       },
    ]
  }
  
  const courseReducer = (state = courses, action) => {
    return state
  }
  
  export default courseReducer