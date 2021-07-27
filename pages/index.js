import React from 'react';
import { LayoutContainer, TodoListContainer } from '../containers';
import { TodoListProvider } from '../context';

export default function Home() {
    return (
        <LayoutContainer>
            <TodoListProvider>
                <TodoListContainer />
            </TodoListProvider>
        </LayoutContainer>
    );
}
