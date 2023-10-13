import { render, screen } from '@testing-library/react'
import Sidebar from '../components/sidebar';

test("Example 1 renders successfully", () => {
    render(<Sidebar/>);

    const element = screen.getByText(/Money Laundering and Fraud Prevention/i);

    expect(element).toBeInTheDocument();
})