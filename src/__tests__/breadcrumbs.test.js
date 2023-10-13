import { render, screen } from '@testing-library/react'
import Breadcrumbs from '../components/breadcrumbs'; 

test("Example 1 renders successfully", () => {
    render(<Breadcrumbs/>);

    const element = screen.getByText(/Home Page/i);

    expect(element).toBeInTheDocument();
})