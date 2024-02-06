import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {takeLatest} from "redux-saga/effects";
import * as emailAPI from "../lib/api/email";

const [SEND_EMAIL_CODE, SEND_EMAIL_CODE_SUCCESS, SEND_EMAIL_CODE_FAILURE] = createRequestActionTypes('email/SEND_EMAIL_CODE');

export const sendEmailCode = createAction(
    SEND_EMAIL_CODE,
    ({email}) => ({email}),
);

const sendEmailCodeSaga = createRequestSaga(SEND_EMAIL_CODE, emailAPI.sendEmailCode);
export function* emailSaga() {
    yield takeLatest(SEND_EMAIL_CODE, sendEmailCodeSaga)
}

const initialState = {
    emailCode: null,
    emailCodeError: null,
};

const email = handleActions(
    {
        [SEND_EMAIL_CODE_SUCCESS]: (state, {payload: emailCode}) => ({
            ...state,
            emailCode,
        }),
        [SEND_EMAIL_CODE_FAILURE]: (state, {payload: emailCodeError}) => ({
            ...state,
            emailCodeError,
        }),
    },
    initialState,
);

export default email;