displaying this data.

import React from 'react'

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

const mockData = [
    {
        "id": 1,
        "first_name": "Fletcher",
        "last_name": "McVanamy",
        "email": "mmcvanamy0@e-recht24.de",
        "age": 30
      }, {
        "id": 2,
        "first_name": "Clarice",
        "last_name": "Harrild",
        "email": "charrild1@dion.ne.jp",
        "age": 35
      }, 
]
test("List renders successfully", () => {
    render(<TestWithMockData data={mockData} />)
    expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
})