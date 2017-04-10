import { search as Actions } from '../actions';

const defaultState = {
    value: '',
    options: [],
};

const search = (state = defaultState, action) => {
    switch (action.type) {
        case 'REQUEST_RECOMMENDATION': {
            return Object.assign({}, state, {
                value: '',
                options: [],
            });
            return state;
        }
        case 'RECEIVE_RECOMMENDATION': {
            return Object.assign({}, state, {
                value: action.search.value,
                options: action.search.options,
            });
        }
        default: {
            return state;
        }
    }
};

export default search
