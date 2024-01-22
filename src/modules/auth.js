import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import {takeLatest} from "redux-saga/effects";
import client from "../lib/api/client";

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const CHANGE_FIELD_EMAIL_CONFIRM = 'auth/CHANGE_FIELD_EMAIL_CONFIRM';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes(
    'auth/SIGNUP',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({form, key, value})
);

export const changeFieldEmailConfirm = createAction(
    CHANGE_FIELD_EMAIL_CONFIRM,
    ({name, value}) => ({name, value})
);

export const initializeForm = createAction(
    INITIALIZE_FORM,
    form => form
);

export const signUp = createAction(
    SIGNUP,
    ({email, password, checkPassword, name, phoneNumber, referenceUrl, part, organization, motto}) =>
        ({email, password, checkPassword, name, phoneNumber, referenceUrl, part, organization, motto})
);

export const login = createAction(
    LOGIN,
    ({email, password}) => ({email, password})
);

// 사가 생성
const signUpSaga = createRequestSaga(SIGNUP, authAPI.signUp);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
    yield takeLatest(SIGNUP, signUpSaga);
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    login: {
        email: '',
        password: '',
    },
    signUp: {
        email: '',
        password: '',
        checkPassword: '',
        name: '',
        phoneNumber: '',
        referenceUrl: '',
        part: 'DEVELOPER',
        organization: '',
        motto: '',
    },
    emailConfirm: '',
    auth: null,
    authError: null,
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value}}) => produce(
            state, draft => {
                draft[form][key] = value;
            }),
        [CHANGE_FIELD_EMAIL_CONFIRM]: (state, {payload: {name, value}}) => ({
            ...state,
           [name]: value,
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form]
        }),
        [SIGNUP_SUCCESS]: (state, {payload: auth}) => ({
            ...state,
            auth,
            authError: null,
        }),
        [SIGNUP_FAILURE]: (state, {payload: error}) => ({
            ...state,
            authError: error
        }),
        [LOGIN_SUCCESS]: (state, {payload: auth}) => {
            try {
                localStorage.setItem('member', JSON.stringify(auth));
                client.defaults.headers.common['Authorization'] = `Bearer ${auth}`;
            } catch (e) {
                console.log('localStorage is not working.');
            }
            return {
                ...state,
                auth,
            }
        },
        [LOGIN_FAILURE]: (state, {payload: error}) => ({
            ...state,
            authError: error
        }),
    },
    initialState,
);

export default auth;