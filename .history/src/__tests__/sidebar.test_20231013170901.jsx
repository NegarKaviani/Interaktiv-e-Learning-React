import { render, screen } from '@testing-library/react'
import Sidebar from '../components/sidebar';

test("Example 1 renders successfully", () => {
    // render(<Sidebar/>);

    const element = screen.getByText(/Sidebar test/i);

    expect(element).toBeInTheDocument();
})