import { result as Actions } from '../actions';

const defaultState = {
    showResult: false,
};

const result = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW_RESULT': {
            return Object.assign({}, state, {
                showResult: true,
                value: action.value,
                result: action.result,
            });
            return state;
        }
        case 'CLOSE_RESULT': {
            return Object.assign({}, state, {
                showResult: false,
            });
        }
        default: {
            return state;
        }
    }
};

export default result
