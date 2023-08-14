import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import {takeLatest} from "redux-saga/effects";
import * as myPageAPI from "../lib/api/mypage";

const [MY_BOARD_LIST, MY_BOARD_LIST_SUCCESS, MY_BOARD_LIST_FAILURE] = createRequestActionTypes('myPage/MY_BOARD_LIST');
const [MY_LIKE_LIST, MY_LIKE_LIST_SUCCESS, MY_LIKE_LIST_FAILURE] = createRequestActionTypes('myPage/MY_LIKE_LIST');

export const myBoardList = createAction(MY_BOARD_LIST);
export const myLikeList = createAction(MY_LIKE_LIST);

// 사가 생성
const myBoardListSaga = createRequestSaga(MY_BOARD_LIST, myPageAPI.myBoardList);
const myLikeListSaga = createRequestSaga(MY_LIKE_LIST, myPageAPI.myLikeList);
export function* myPageSaga() {
    yield takeLatest(MY_BOARD_LIST, myBoardListSaga);
    yield takeLatest(MY_LIKE_LIST, myLikeListSaga);
}

const initialState = {
    my: null,
    myError: null,
};

const myPage = handleActions(
    {
        [MY_BOARD_LIST_SUCCESS]: (state, {payload: my}) => ({
            ...state,
            my,
        }),
        [MY_BOARD_LIST_FAILURE]: (state, {payload: error}) => ({
            ...state,
            myError: error,
        }),
        [MY_LIKE_LIST_SUCCESS]: (state, {payload: my}) => ({
            ...state,
            my,
        }),
        [MY_LIKE_LIST_FAILURE]: (state, {payload: error}) => ({
            ...state,
            myError: error,
        }),
    },
    initialState,
);

export default myPage;