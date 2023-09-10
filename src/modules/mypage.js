import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import {takeLatest} from "redux-saga/effects";
import * as myPageAPI from "../lib/api/mypage";
import {produce} from "immer";

const CHANGE_FIELD = 'myPage/CHANGE_FIELD';
const [MY_BOARD_LIST, MY_BOARD_LIST_SUCCESS, MY_BOARD_LIST_FAILURE] = createRequestActionTypes('myPage/MY_BOARD_LIST');
const [MY_LIKE_LIST, MY_LIKE_LIST_SUCCESS, MY_LIKE_LIST_FAILURE] = createRequestActionTypes('myPage/MY_LIKE_LIST');
const [MY_PROFILE, MY_PROFILE_SUCCESS, MY_PROFILE_FAILURE] = createRequestActionTypes('myPage/MY_PROFILE');
const [MY_PROFILE_UPDATE, MY_PROFILE_UPDATE_SUCCESS, MY_PROFILE_UPDATE_FAILURE] = createRequestActionTypes('myPage/MY_PROFILE_UPDATE');

export const changeField = createAction(
    CHANGE_FIELD,
    ({profile, key, value}) => ({profile, key, value}),
);
export const myBoardList = createAction(MY_BOARD_LIST);
export const myLikeList = createAction(MY_LIKE_LIST);
export const myProfile = createAction(MY_PROFILE);
export const myProfileUpdate = createAction(MY_PROFILE_UPDATE);

// 사가 생성
const myBoardListSaga = createRequestSaga(MY_BOARD_LIST, myPageAPI.myBoardList);
const myLikeListSaga = createRequestSaga(MY_LIKE_LIST, myPageAPI.myLikeList);
const myProfileSaga = createRequestSaga(MY_PROFILE, myPageAPI.myProfile);
const myProfileUpdateSaga = createRequestSaga(MY_PROFILE_UPDATE, myPageAPI.myProfileUpdate);

export function* myPageSaga() {
    yield takeLatest(MY_BOARD_LIST, myBoardListSaga);
    yield takeLatest(MY_LIKE_LIST, myLikeListSaga);
    yield takeLatest(MY_PROFILE, myProfileSaga);
    yield takeLatest(MY_PROFILE_UPDATE, myProfileUpdateSaga);
}

const initialState = {
    profile: null,
    my: null,
    myError: null,
};

const myPage = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {profile, key, value}}) => produce(
            state, draft => {
                draft[profile][key] = value;
            }),
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
        [MY_PROFILE_SUCCESS]: (state, {payload: my}) => ({
            ...state,
            my,
            profile: {...my.data}
        }),
        [MY_PROFILE_FAILURE]: (state, {payload: error}) => ({
            ...state,
            myError: error,
        }),
        [MY_PROFILE_UPDATE_SUCCESS]: (state, {payload: my}) => ({
            ...state,
            my,
        }),
        [MY_PROFILE_UPDATE_FAILURE]: (state, {payload: error}) => ({
            ...state,
            myError: error,
        }),
    },
    initialState,
);

export default myPage;