import React from 'react';
import App from '../App';


test("List renders successfully", () => {
    render(<App  />);
    expect(screen.getByText(/App/i)).toBeInTheDocument();
})