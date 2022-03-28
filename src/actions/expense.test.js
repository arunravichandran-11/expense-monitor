// define action types:

/// api call: http://localhost:2000/api/expenses


// sample action:

// {
//     type: 'SEND_EXPENSE', // constant
//     payload:
// }

import configureMockStore from 'redux-mock-store';
import * as constants from './constants';
import ExpenseAction from './expense.action';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

// create a mock store and response
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({expense: {}});
const mockResponse = [{"expenseType":"Books","amountSpend":400},{"expenseType":"Toys","amountSpend":200}];

// create a mock fetch call using fetchmock

fetchMock.get('http://localhost:2000/api/expenses', mockResponse);

it('create an async action to fetch the expense', () => {

    const expense = {
        expenseType: 'Toys',
        amountSpent: 100
    };

    const expectedAction = {
        type: constants.SEND_EXPENSE,
        data: mockResponse
    };

    // dispatch action to the store. 
    return store.dispatch(ExpenseAction.sendExpense()).then(() => {
        // get action
        var expectedResult = store.getActions();
        expect(expectedResult[0]).toEqual(expectedAction);
    });

});
