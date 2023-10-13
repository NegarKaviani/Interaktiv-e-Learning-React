import { render, screen } from '@testing-library/react'
import { MainContent } from '../components/content';

test("Example 1 renders successfully", () => {
    render(<MainContent />);

    const element = screen.getByText(/Intensification of money/i);

    expect(element).toBeInTheDocument();
})