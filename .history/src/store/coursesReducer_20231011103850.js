const initialState = [
  {cat: 1,
    catCourses:[
      {
        name: 'Intensification of money Laundering prevention-private customer advice',
        duration: 30,
        progress: 3,
        end: 'March 14, 2024',
      },
      {
        name: ' Basic Training - Preventation of Money Laundering and Terrorist Financing(V3.0)',
        duration: 44,
        progress: 0,
        end: '-',
      },
      {
        name: ' Advanced Training - Preventation of Money Laundering and Terrorist Financing(V3.0)',
        duration: 22,
        progress: 0,
        end: '-',
      }
    ]
  } ,
  {cat: 2,
    catCourses:[
      {
        name: 'IT Security Basics(V1.01.3)',
        duration: 40,
        progress: 0,
        end: 'March 14, 2024',
      },
      {
        name: 'Basic training It security and information security (V1.0)',
        duration: 60,
        progress: 3,
        end: '-',
      },
      {
        name: ' Advanced training It security and information security (V1.1)',
        duration: 22,
        progress: 0,
        end: '-',
      }
    ]
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
];

const courseReducer = (state = initialState , action) => {
  return state
}
  export default courseReducer