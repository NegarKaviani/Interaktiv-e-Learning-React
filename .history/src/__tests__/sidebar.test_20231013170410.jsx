import { render, screen } from '@testing-library/react'
import Sidebar from '../components/sidebar';

test("Example 1 renders successfully", () => {
    render(<FirstTest/>);

    const element = screen.getByText(/first test/i);

    expect(element).toBeInTheDocument();
})