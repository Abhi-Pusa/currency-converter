import {defaultState} from '../../store/state';
import { handleActions } from '../../utilities/utils';
import {
    SET_CURRENT_CURRENCY_RATES,
    SET_LOADING_STATUS,
    SET_ERROR_FLAG
} from '../actions/actions';

const setCurrentCurrencyRate = (state,action) => {
    let newState = {...state,...{rates:action.payload}};
    return newState;
}

const setLoadingStatus = (state,action) => {
    let newState = {...state,...{loading:action.payload}};
    return newState;
}

const setErrorFlag = (state,action) => {
    let newState = {...state,...{error:action.payload}};
    return newState;
}

export default handleActions({
    [SET_CURRENT_CURRENCY_RATES]:setCurrentCurrencyRate,
    [SET_LOADING_STATUS]:setLoadingStatus,
    [SET_ERROR_FLAG]:setErrorFlag
},defaultState);