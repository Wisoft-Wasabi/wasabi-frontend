import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {takeLatest} from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";

const CHANGE_AUTH_CODE = 'mail/CHANGE_AUTH_CODE';
const [VERIFY_EMAIL, VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_FAILURE] = createRequestActionTypes('mail/VERIFY_EMAIL');

export const changeAuthCode = createAction(
    CHANGE_AUTH_CODE,
    ({name, value}) => ({name, value})
);
export const verifyEmail = createAction(
    VERIFY_EMAIL,
    ({email}) => ({email}),
);

const verifyEmailSaga = createRequestSaga(VERIFY_EMAIL, authAPI.verifyEmail);
export function* mailSaga() {
    yield takeLatest(VERIFY_EMAIL, verifyEmailSaga)
}

const initialState = {
    authCode: '',
    code: null,
    codeError: null,
};

const mail = handleActions(
    {
        [CHANGE_AUTH_CODE]: (state, {payload: {name, value}}) => ({
            ...state,
            [name]: value,
        }),
        [VERIFY_EMAIL_SUCCESS]: (state, {payload: code}) => ({
            ...state,
            code,
        }),
        [VERIFY_EMAIL_FAILURE]: (state, {payload: codeError}) => ({
            ...state,
            codeError,
        }),
    },
    initialState,
);

export default mail;