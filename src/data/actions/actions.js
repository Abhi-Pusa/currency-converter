import {createAction} from '../../utilities/utils';
import {partial} from '../../utilities/fn';
import BearApiServices from '../../services/bearApiServices';

export const SET_BEAR_LIST = 'SET_BEAR_LIST';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_FAV_FLAG = 'SET_FAV_FLAG';
export const UNSET_FAV_FLAG = 'UNSET_FAV_FLAG';
export const SET_MODAL_DATA = 'SET_MODAL_DATA';

const setBearList = createAction(SET_BEAR_LIST);
const setLoadingStatus = createAction(SET_LOADING_STATUS);
const setModalData = createAction(SET_MODAL_DATA);

export const setFavoriteFlag = createAction(SET_FAV_FLAG);
export const unsetFavoriteFlag = createAction(UNSET_FAV_FLAG);

const fetchBearListRoot = (fetchBearLst) => (dispatch,getState) => {
    dispatch(setLoadingStatus(true));
    fetchBearLst().then((response)=> response.json()).then(response => {
        response = response.map(value => {
            value['favFlag'] = false;
            return value;
        });
        dispatch(setBearList(response));
        dispatch(setLoadingStatus(false));
    });
}

export const setModaldata = (status,content) => (dispatch,getState) => {
    let data = {status:status,content:content};
    dispatch(setModalData(data));
}

export const fetchBearList = partial(fetchBearListRoot,BearApiServices.getBearList());