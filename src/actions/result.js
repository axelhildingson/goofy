export const SHOW_RESULT = 'SHOW_RESULT';
export const CLOSE_RESULT = 'CLOSE_RESULT';

export function openResult(value, result) {
    return {
        value: value,
        result: result,
        type: 'SHOW_RESULT',
    };
}

export function closeResult() {
    return {
        type: 'CLOSE_RESULT',
    };
}
