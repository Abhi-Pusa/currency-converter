export const createAction = type => payload => { return { type, payload } };

export const handleActions = (handlers, defaultState) => (state = defaultState, action) => {
    if (handlers[action.type]) return handlers[action.type](state, action);
    return state;
}