import { render, screen } from '@testing-library/react'
import Sidebar from '../components/sidebar';

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
      <div>
          <ul>
              {data.map(item => (
                  <li key={item.id}>
                      {item.id}
                      {item.first_name},
                      {item.last_name},
                      {item.email}
  
                  </li>
              ))}
          </ul>
      </div>
    )
  }
  
  export default TestWithMockData


  test("List renders successfully", () => {
    render(<TestWithMockData data={mockData} />)
    expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
})