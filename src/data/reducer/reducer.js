import {defaultState} from '../../store/state';
import { handleActions } from '../../utilities/utils';
import {
    SET_BEAR_LIST,
    SET_LOADING_STATUS,
    SET_FAV_FLAG,
    UNSET_FAV_FLAG,
    SET_MODAL_DATA
} from '../actions/actions';

const setBearList = (state,action) => {
    let newState = {...state,...{bearList:action.payload}};
    return newState;
}

const setLoadingStatus = (state,action) => {
    let newState = {...state,...{loading:action.payload}};
    return newState;
}

const setFavoriteFlag = (state,action) => {
    let newList = state.bearList && state.bearList.map((bear,key) => {
        if(bear.id == action.payload){
            bear['favFlag'] = true;
        }
        return bear;
    });
    let newState = {...state,...{bearList:newList}};
    return newState;
}

const unsetFavoriteFlag = (state,action) => {
    let newList = state.bearList && state.bearList.map((bear,key) => {
        if(bear.id == action.payload){
            bear['favFlag'] = false;
        }
        return bear;
    });
    let newState = {...state,...{bearList:newList}};
    return newState;
}

const setModalData = (state,action) => {
    let {status,content} = action.payload;
    let newModal = {modal:{isOpen:status,children:content}};
    let newState = {...state,...newModal};
    return newState;
}

export default handleActions({
    [SET_BEAR_LIST]:setBearList,
    [SET_LOADING_STATUS]:setLoadingStatus,
    [SET_FAV_FLAG]:setFavoriteFlag,
    [UNSET_FAV_FLAG]:unsetFavoriteFlag,
    [SET_MODAL_DATA]:setModalData
},defaultState);