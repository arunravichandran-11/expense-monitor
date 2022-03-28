

const ExpenseReducer = (state={}, action) => {

    switch(action.type) {
        case 'SEND_EXPENSE':
            return {
                ...state,
                success: action.data.success,
                msg: action.data.msg
            }
        case 'FETCH_EXPENSE':
            return {
                ...state,
                success: action.data.success,
                data: action.data.result
            }
        default:
            return state;
    }
}

export default ExpenseReducer;