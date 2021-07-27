import { result } from 'lodash';
import { sortItems } from './TodoListReducer';

test('Sort items method', () => {
    const items = [
        {
            description: 'Task 1',
            dueDate: '2020-03-10T17:50:44.673Z',
            isComplete: true
        },
        {
            description: 'Task 2',
            dueDate: '2020-03-10T17:50:44.673Z',
            isComplete: false
        },
        {
            description: 'Task 3',
            dueDate: '2022-03-10T17:50:44.673Z',
            isComplete: false
        }
    ];
    const data = sortItems(items);
    const result = [
        {
            description: 'Task 2',
            dueDate: '2020-03-10T17:50:44.673Z',
            isComplete: false,
            status: { id: 1, type: 'Overdue' }
        },
        {
            description: 'Task 3',
            dueDate: '2022-03-10T17:50:44.673Z',
            isComplete: false,
            status: { id: 2, type: 'Pending' }
        },
        {
            description: 'Task 1',
            dueDate: '2020-03-10T17:50:44.673Z',
            isComplete: true,
            status: { id: 3, type: 'Completed' }
        }
    ];
    expect(data).toEqual(result);
});
