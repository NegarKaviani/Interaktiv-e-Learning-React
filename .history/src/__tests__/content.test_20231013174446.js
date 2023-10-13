import { render, screen } from '@testing-library/react'
import content from '../components/content';

test("Example 1 renders successfully", () => {
    render(<content/>);

    const element = screen.getByText(/Intensification of money/i);

    expect(element).toBeInTheDocument();
})