import {createAction, handleActions} from "redux-actions";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {takeLatest} from "redux-saga/effects";
import * as emailAPI from "../lib/api/email";

const [SEND_EMAIL_CONFIRM, SEND_EMAIL_CONFIRM_SUCCESS, SEND_EMAIL_CONFIRM_FAILURE] = createRequestActionTypes('email/SEND_EMAIL_CONFIRM');

export const sendEmailConfirm = createAction(
    SEND_EMAIL_CONFIRM,
    ({email}) => ({email}),
);

const sendEmailConfirmSaga = createRequestSaga(SEND_EMAIL_CONFIRM, emailAPI.sendEmailConfirm);
export function* emailSaga() {
    yield takeLatest(SEND_EMAIL_CONFIRM, sendEmailConfirmSaga)
}

const initialState = {
    email: null,
    emailError: null,
};

const email = handleActions(
    {
        [SEND_EMAIL_CONFIRM_SUCCESS]: (state, {payload: email}) => ({
            ...state,
            email,
        }),
        [SEND_EMAIL_CONFIRM_FAILURE]: (state, {payload: emailError}) => ({
            ...state,
            emailError,
        }),
    },
    initialState,
);

export default email;