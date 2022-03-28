import { combineReducers } from 'redux';

import ExpenseReducer from './expense.reducer';

const rootReducer = combineReducers({
    ExpenseReducer: ExpenseReducer
});

export default rootReducer;