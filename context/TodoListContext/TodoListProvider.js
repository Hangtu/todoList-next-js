/* eslint-disable no-param-reassign */
import React, {
    useReducer,
    useEffect,
    createContext,
    useContext,
    useMemo
} from 'react';
import todoListReducer from './TodoListReducer';
import { SET_ITEMS_REQUEST, UPDATE_ITEM } from './TodoListActions';
import TodoListAPI from '../../services';

export const TodoListContext = createContext();

export function TodoListProvider(props) {
    const initialState = {};
    const [itemsState, dispatch] = useReducer(todoListReducer, initialState);
    useEffect(() => {
        TodoListAPI.getListItemsRequest().then((response) => {
            const list = response.data;
            dispatch({ type: SET_ITEMS_REQUEST, items: list });
        });
    }, []);

    const updateStatus = (e, item) => {
        const isChecked = e.target.checked;
        dispatch({ type: UPDATE_ITEM, item, status: isChecked });
        TodoListAPI.updateItemRequest(item, isChecked)
            .then(() => {})
            .catch(() => {
                dispatch({ type: UPDATE_ITEM, item, status: !isChecked });
                throw new Error('Something went wrong updating the info');
            });
    };

    const value = useMemo(
        () => ({
            itemsState,
            updateStatus
        }),
        [itemsState]
    );
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <TodoListContext.Provider value={value} {...props} />;
}

export function useTodoListContext() {
    const context = useContext(TodoListContext);
    if (!context) {
        throw new Error('No TodoListContext exist');
    }
    return context;
}
