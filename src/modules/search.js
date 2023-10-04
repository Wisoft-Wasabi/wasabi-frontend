import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as searchAPI from "../lib/api/search";
import {takeLatest} from "redux-saga/effects";

const CHANGE_FIELD = 'search/CHANGE_FIELD';
const [SEARCH_KEYWORD, SEARCH_KEYWORD_SUCCESS, SEARCH_KEYWORD_FAILURE]= createRequestActionTypes(
    'search/SEARCH_KEYWORD',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({key, value}) => ({key, value}),
);

export const searchKeyword = createAction(
    SEARCH_KEYWORD,
    keyword => keyword,
);

// 사가 생성
const searchKeywordSaga = createRequestSaga(SEARCH_KEYWORD, searchAPI.searchKeyword);
export function* searchSaga() {
    yield takeLatest(SEARCH_KEYWORD, searchKeywordSaga);
}

const initialState = {
    keyword: '',
    search: '',
    searchError: '',
};

const search = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value,
        }),
        [SEARCH_KEYWORD_SUCCESS]: (state, {payload: search}) => ({
            ...state,
            search,
        }),
        [SEARCH_KEYWORD_FAILURE]: (state, {payload: searchError}) => ({
            ...state,
            searchError,
        }),
    },
    initialState,
);

export default search;