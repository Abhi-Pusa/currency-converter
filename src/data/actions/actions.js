import { createAction } from '../../utilities/utils';
import { partial } from '../../utilities/fn';
import CurrencyApiServices from '../../services/CurrencyApiServices';
import { create } from 'domain';

export const SET_CURRENT_CURRENCY_RATES = 'SET_CURRENT_CURRENCY_RATES';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_ERROR_FLAG = 'SET_ERROR_FLAG';

const setCurrentCurrencyRates = createAction(SET_CURRENT_CURRENCY_RATES);
const setLoadingStatus = createAction(SET_LOADING_STATUS);
const setErrorFLag = createAction(SET_ERROR_FLAG);

const fetchCurrentCurrencyRoot = (fetchCurntCurrency) => (dispatch, getState) => {
    dispatch(setLoadingStatus(true));
    fetchCurntCurrency().then((response) => response.json()).then(response => {
        dispatch(setCurrentCurrencyRates(response.rates));
        dispatch(setErrorFLag(false));
        dispatch(setLoadingStatus(false));
    }).catch(() => {
        dispatch(setErrorFLag(true));
        dispatch(setLoadingStatus(false));
    });
}

export const fetchCurrentCurrency = partial(fetchCurrentCurrencyRoot, CurrencyApiServices.getCurrencyRates());