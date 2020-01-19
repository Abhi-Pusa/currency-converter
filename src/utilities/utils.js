export const createAction = type => payload => { return { type, payload } };

export const handleActions = (handlers, defaultState) => (state = defaultState, action) => {
    if (handlers[action.type]) return handlers[action.type](state, action);
    return state;
}

export const computeCurrencyConversion = (fromCurVal, toCurVal, amount) => {
    return Math.round(((amount / fromCurVal) * toCurVal) * 100) / 100;;
}

export const checkDecimalNumber = (value) => {
    let regExp = /^\d+\.{0,1}\d*$/;
    return regExp.test(value.toString());
}