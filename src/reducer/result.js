import { result as Actions } from '../actions/result';

const defaultState = {
    showResult: false;
};

export default function testsuites(state = defaultState, action) {
    switch (action.type) {
        case Actions.SHOW_RESULT: {
            return Object.assign({}, state, {
                showResult: true,
            });
            return state;
        }
        case Actions.CLOSE_RESULT: {
            return Object.assign({}, state, {
                showResult: false,
            });
        }
        default: {
            return state;
        }
    }
}
