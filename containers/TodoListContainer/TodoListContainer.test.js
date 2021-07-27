import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { TodoListProvider } from '../../context';
import TodoListContainer from './';

describe('Todo List Container', () => {
    it('should render', () => {
        const component = render(
            <TodoListProvider>
                <TodoListContainer />
            </TodoListProvider>
        );
        expect(component.container).toHaveTextContent(/task/i);
        expect(component.container).toHaveTextContent(/option/i);
    });
});
