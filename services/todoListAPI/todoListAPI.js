import axios from 'axios';

export const instance = axios.create({
    baseURL: 'HTTPS://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io',
    headers: {
        'X-Api-Key':
            'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c'
    }
});

class TodoListAPI {
    static getListItemsRequest = () => {
        const response = instance({
            url: '/get',
            method: 'get'
        });
        return response;
    };

    static updateItemRequest = (item, payload) => {
        const response = instance({
            url: `/patch/${item.id}`,
            method: 'patch',
            data: {
                isComplete: payload
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    };
}

export default TodoListAPI;
