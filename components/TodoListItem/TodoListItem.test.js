import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { TodoListProvider } from '../../context';
import { TodoListContainer } from '../../containers';
import TodoListItem from './TodoListItem';

describe('TodoListComponent', () => {
    it('Should render', () => {
        const item = {
            description: 'Task 3',
            status: {
                id: 1,
                type: 'overdue'
            },
            dueDate: '2020-03-10T17:50:44.673Z',
            isComplete: true
        };

        const component = render(
            <TodoListProvider>
                <TodoListItem item={item} />
            </TodoListProvider>
        );

        expect(component.container).toHaveTextContent('Task 3');
        expect(component.container).toHaveTextContent(/overdue/i);
        expect(component.container).toHaveTextContent('3/10/2020');
    });
});

describe('Checkbox validation', () => {
    it('Should render items  & fire the updateElements method on checkbox change', async () => {
        const component = render(
            <TodoListProvider>
                <TodoListContainer>
                    <TodoListItem />
                </TodoListContainer>
            </TodoListProvider>
        );
        await waitFor(() => screen.getAllByTestId('list-element'));
        const button = component.getAllByLabelText('checkbox')[0];
        fireEvent.click(button);
        expect(button).toBeChecked();
    });
});
