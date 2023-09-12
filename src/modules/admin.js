import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as adminAPI from "../lib/api/admin";
import {takeLatest} from "redux-saga/effects";

const [READ_SIGNUP_LIST, READ_SIGNUP_LIST_SUCCESS, READ_SIGNUP_LIST_FAILURE] = createRequestActionTypes('admin/READ_SIGNUP_LIST');

export const readSignUpList = createAction(READ_SIGNUP_LIST);

// 사가 생성
const readSignUpListSaga = createRequestSaga(READ_SIGNUP_LIST, adminAPI.readSignUpList);
export function* adminSaga() {
    yield takeLatest(READ_SIGNUP_LIST, readSignUpListSaga);
}

const initialState = {
    signUpList: null,
    signUpListError: null,
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
    },
    initialState,
);

export default admin;