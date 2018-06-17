const defaultState = {
    showResult: false,
};

const result = (state = defaultState, action) => {
    switch (action.type) {
        case 'REQUEST_RESULT': {
            return Object.assign({}, state, {
                showResult: false,
                searchquery: action.searchquery
            });
        }
        case 'RECEIVE_RESULT': {
            return Object.assign({}, state, {
                showResult: true,
                searchquery: action.searchquery,
                result: action.result,
            });
        }
        default: {
            return state;
        }
    }
};

export default result
