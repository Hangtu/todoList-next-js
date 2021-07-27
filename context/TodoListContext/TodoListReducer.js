/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { UPDATE_ITEM, SET_ITEMS_REQUEST } from './TodoListActions';

const checkOverdueDate = (date) => {
    if (!date) return 1;
    const itemDate = new Date(date).getTime();
    const todayDate = new Date().getTime();
    return itemDate > todayDate ? 1 : 0;
};

export const sortItems = (list) => {
    list.forEach((item) => {
        if (item.isComplete) {
            item.status = { id: 3, type: 'Completed' };
        } else if (checkOverdueDate(item?.dueDate)) {
            item.status = { id: 2, type: 'Pending' };
        } else {
            item.status = { id: 1, type: 'Overdue' };
        }
    });

    const sortedList = list.sort((a, b) => {
        if (a.status.id === b.status.id) {
            return (
                new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
            );
        }
        return a.status.id > b.status.id ? 1 : -1;
    });
    return sortedList;
};

// REDUCER EVENTS
const setItemsToList = (draftState, items) => {
    draftState = sortItems(items);
    return draftState;
};

const updateListItem = (draftState, item, status) => {
    const itemIndex = draftState.findIndex((element) => element.id === item.id);
    draftState[itemIndex].isComplete = status;
    draftState = sortItems(draftState);
    return draftState;
};

const todoListReducer = (state, action) => {
    switch (action.type) {
        case SET_ITEMS_REQUEST:
            return produce(state, (draftState) => {
                return setItemsToList(draftState, action.items);
            });
        case UPDATE_ITEM:
            return produce(state, (draftState) => {
                return updateListItem(draftState, action.item, action.status);
            });
        default:
            return state;
    }
};

export default todoListReducer;
