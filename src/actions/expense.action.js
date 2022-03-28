import * as constants from './constants';
import dayjs from 'dayjs';

const ExpenseAction = {
    sendExpense: () => {
        return (dispatch) => {
            return fetch('http://localhost:2000/api/expenses').then(
                (response) => response.json()
            ).then(data => {
                // console.log('-------------');
                // console.log(expenses);
                // console.log('-------------');
                dispatch({
                    type: constants.SEND_EXPENSE,
                    data
                })
            })
        }
    },
    getExpense: () => {
        return {
            type: constants.GET_EXPENSE,
        }
    }
};


export const getExpenseByDate = (date) => {
    return (dispatch) => {
        return fetch(`http://localhost:2000/api/expenses?date=${date}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'FETCH_EXPENSE',
                data
            });
        })
        .catch((error) => {
            dispatch({
                type: 'FETCH_EXPENSE_ERROR',
                error
            })        
        });
    }
}
export const sendExpense = (data) => {

    const {expenseType, amountSpent, dateOfPurchase} = data;

    const payload = {
        expense: expenseType,
        amount: amountSpent,
        // date: new Date(dateOfPurchase)
        date: dateOfPurchase
        // date: dayjs(dateOfPurchase).format()
    }
    console.log('payload', payload);
    return (dispatch) => {
        return fetch('http://localhost:2000/api/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'SEND_EXPENSE',
                data
            });
        })
        .catch((error) => {
            dispatch({
                type: 'SEND_EXPENSE_ERROR',
                data
            })        
        });
    }
}
