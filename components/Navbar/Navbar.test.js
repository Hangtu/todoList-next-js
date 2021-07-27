import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
    it('should render', () => {
        const component = render(<Navbar />);
    });

    it('should show Todo List App title', () => {
        const component = render(<Navbar />);
        const linkElement = screen.getByText(/todo list app/i);
        expect(linkElement).toBeInTheDocument();
    });
});
