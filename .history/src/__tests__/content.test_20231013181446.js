import React from 'react';
import App from '../App';


test("List renders successfully", () => {
    render(<App data={mockData} />)
    expect(screen.getByText(/Advanced training/i)).toBeInTheDocument();
})