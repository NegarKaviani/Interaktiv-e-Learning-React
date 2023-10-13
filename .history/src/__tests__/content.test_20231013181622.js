import { render, screen } from '@testing-library/react'
import App from '../App';

test("Example 1 renders successfully", () => {
    render(<App/>);

    const element = screen.getByText(/App/i);

    expect(element).toBeInTheDocument();
})