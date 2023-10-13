import { render, screen } from '@testing-library/react'
import Sidebar1 from '../components/sidebar';

test("Example 1 renders successfully", () => {
    render(<Sidebar/>);

    const element = screen.getByText(/Money 111111Laundering and Fraud Prevention/i);

    expect(element).toBeInTheDocument();
})