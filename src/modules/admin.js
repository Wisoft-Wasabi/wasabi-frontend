import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as adminAPI from "../lib/api/admin";
import {takeLatest} from "redux-saga/effects";

const [READ_SIGNUP_LIST, READ_SIGNUP_LIST_SUCCESS, READ_SIGNUP_LIST_FAILURE] = createRequestActionTypes('admin/READ_SIGNUP_LIST');
const [ACCEPT_SIGNUP_REQUEST, ACCEPT_SIGNUP_REQUEST_SUCCESS, ACCEPT_SIGNUP_REQUEST_FAILURE] = createRequestActionTypes('admin/ACCEPT_SIGNUP_REQUEST');

export const readSignUpList = createAction(READ_SIGNUP_LIST);
export const acceptSignUpRequest = createAction(
    ACCEPT_SIGNUP_REQUEST,
    memberId => memberId,
);

// 사가 생성
const readSignUpListSaga = createRequestSaga(READ_SIGNUP_LIST, adminAPI.readSignUpList);
const acceptSignUpRequestSaga = createRequestSaga(ACCEPT_SIGNUP_REQUEST, adminAPI.acceptSignUpRequest);
export function* adminSaga() {
    yield takeLatest(READ_SIGNUP_LIST, readSignUpListSaga);
    yield takeLatest(ACCEPT_SIGNUP_REQUEST, acceptSignUpRequestSaga);
}

const initialState = {
    signUpList: null,
    signUpListError: null,
    acceptSignUp: null,
    acceptSignUpError: null,
};

const admin = handleActions(
    {
        [READ_SIGNUP_LIST_SUCCESS]: (state, {payload: signUpList}) => ({
            ...state,
            signUpList,
        }),
        [READ_SIGNUP_LIST_FAILURE]: (state, {payload: error}) => ({
            ...state,
            signUpListError: error,
        }),
        [ACCEPT_SIGNUP_REQUEST_SUCCESS]: (state, {payload: acceptSignUp}) => ({
            ...state,
            acceptSignUp,
        }),
        [ACCEPT_SIGNUP_REQUEST_FAILURE]: (state, {payload: error}) => ({
            ...state,
            acceptSignUpError: error,
        }),
    },
    initialState,
);

export default admin;