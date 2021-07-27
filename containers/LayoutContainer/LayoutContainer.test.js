import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import LayoutContainer from './';

describe('Todo List Container', () => {
    it('should render', () => {
        const component = render(
            <LayoutContainer>
                <>
                    <span>New Page</span>
                </>
            </LayoutContainer>
        );
        component.getByLabelText('footer');
    });
});
