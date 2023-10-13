import { render, screen } from '@testing-library/react'
import Header from '../components/header';

test("Example 1 renders successfully", () => {
    render(<Header/>);

    const element = screen.getByText(/Money Laundering and Fraud Prevention/i);

    expect(element).toBeInTheDocument();
})