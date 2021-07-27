import '@testing-library/jest-dom';
import convertDateToString from './';

describe('Date Format Function', () => {
    it('should convert date to 01/01/0000 format', () => {
        const date = '2020-03-10T17:50:44.673Z';
        const newDate = convertDateToString(date);
        expect(newDate).toEqual('3/10/2020');
    });
});
