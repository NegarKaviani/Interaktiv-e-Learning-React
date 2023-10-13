import { render, screen } from '@testing-library/react'

const mockData = [
    {cat: 1,
        icon: require('../images/fraud_prevention.png'),
        catCourses:[
          {
            id:1,
            name: 'Intensification of money Laundering prevention-private customer advice',
            duration: 30,
            progress: 3,
            end: 'March 14, 2024',
          },
          {
            id:2,
            name: ' Basic Training - Preventation of Money Laundering and Terrorist Financing(V3.0)',
            duration: 44,
            progress: 0,
            end: '-',
          },
          {
            id:3,
            name: ' Advanced Training - Preventation of Money Laundering and Terrorist Financing(V3.0)',
            duration: 22,
            progress: 0,
            end: '-',
          }
        ]
      } ,
      {cat: 2,
        icon: require('../images/it_security.png'),
        catCourses:[
          {
            id:4,
            name: 'IT Security Basics(V1.01.3)',
            duration: 40,
            progress: 0,
            end: 'March 14, 2024',
          },
          {
            id:5,
            name: 'Basic training It security and information security (V1.0)',
            duration: 60,
            progress: 3,
            end: '-',
          },
          {
            id:6,
            name: ' Advanced training It security and information security (V1.1)',
            duration: 29,
            progress: 0,
            end: '-',
          }
        ]
       },
]
const TestWithMockData = ({data}) => {
    return (
        <div className="courses-info w-full lg:w-10/12">
        {data.map((course , id) => {
            return(
                <div className="course-detail flex gap-6 mb-7" key={id}>
                    <p className="course-name w-9/12 text-lg leading-6 text-zinc-500 font-bold ">
                    {course.name}
                    </p>
                    <div className="w-1/4">
                        <div className="duration flex flex-col lg:flex-row justify-between">
                            <p className="duration-text text-zinc-500">{course.duration}min</p>
                            <div className="progress flex items-center gap-1.5">
                                {Array.apply(null, { length: course.progress }).map((e, i) => (
                                    <div className="h-3 w-3 bg-yellow-300 rounded-full" key={i}></div>
                                    ))}
                                {Array.apply(null, { length: (5 - course.progress) }).map((e, j) => (
                                <div className="h-3 w-3 bg-zinc-300 rounded-full" key={j}></div>
                                ))}
                            
                            </div>
                        </div>
                        <div className="duration-text text-zinc-500">
                            To be done by: {course.end}
                        </div>
                    </div>
                </div>
            )
          }) 
        }

    </div>
    )
  }
  
  export default TestWithMockData


  test("List renders successfully", () => {
    render(<TestWithMockData data={mockData} />)
    expect(screen.getByText(/Intensification of money/i)).toBeInTheDocument();
})