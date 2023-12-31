import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as likeAPI from "../lib/api/like";
import {takeLatest} from "redux-saga/effects";

const [REGISTER_LIKE, REGISTER_LIKE_SUCCESS, REGISTER_LIKE_FAILURE] = createRequestActionTypes('like/REGISTER_LIKE');
const [CANCEL_LIKE, CANCEL_LIKE_SUCCESS, CANCEL_LIKE_FAILURE] = createRequestActionTypes('like/CANCEL_LIKE');
const [GET_LIKE,GET_LIKE_SUCCESS, GET_LIKE_FAILURE] = createRequestActionTypes('like/GET_LIKE');

export const registerLike = createAction(
    REGISTER_LIKE,
    boardId => boardId,
);

export const cancelLike = createAction(
    CANCEL_LIKE,
    boardId => boardId,
);

export const getLike = createAction(
    GET_LIKE,
    boardId => boardId,
);

// 사가 생성
const registerLikeSaga = createRequestSaga(REGISTER_LIKE, likeAPI.registerLike);
const cancelLikeSaga = createRequestSaga(CANCEL_LIKE, likeAPI.cancelLike);
const getLikeSaga = createRequestSaga(GET_LIKE, likeAPI.getLike);

export function* likeSaga() {
    yield takeLatest(REGISTER_LIKE, registerLikeSaga);
    yield takeLatest(CANCEL_LIKE, cancelLikeSaga);
    yield takeLatest(GET_LIKE, getLikeSaga);
}

const initialState = {
    like: null,
    likeError: null,
};

const like = handleActions(
    {
        [REGISTER_LIKE_SUCCESS]: (state, {payload: like}) => ({
            ...state,
            like,
        }),
        [REGISTER_LIKE_FAILURE]: (state, {payload: likeError}) => ({
            ...state,
            likeError,
        }),
        [CANCEL_LIKE_SUCCESS]: (state, {payload: like}) => ({
            ...state,
            like,
        }),
        [CANCEL_LIKE_FAILURE]: (state, {payload: likeError}) => ({
            ...state,
            likeError,
        }),
        [GET_LIKE_SUCCESS]: (state, {payload: like}) => ({
            ...state,
            like,
        }),
        [GET_LIKE_FAILURE]: (state, {payload: likeError}) => ({
            ...state,
            likeError,
        }),
    },
    initialState,
);

export default like;