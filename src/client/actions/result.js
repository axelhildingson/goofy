export const SHOW_RESULT = 'SHOW_RESULT';
export const CLOSE_RESULT = 'CLOSE_RESULT';

export function requestResult(searchquery) {
    return {
        searchquery: searchquery,
        type: 'REQUEST_RESULT',
    };
}

export function receiveResult(searchquery, result) {
    return {
        searchquery: searchquery,
        result: result,
        type: 'RECEIVE_RESULT',
    };
}

export function search(quary) {
    return (dispatch, getState) => {
        dispatch(requestResult(quary))
        const data = fetch("http://localhost:8080/topresult").then(response => response.json())
        .then(result => dispatch(quary, result));
    }
}
