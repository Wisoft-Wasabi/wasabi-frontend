import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import {all} from "redux-saga/effects";
import loading from "./loading";

const rootReducer = combineReducers({
    loading,
    auth,
});

export function* rootSaga() {
    yield all([authSaga()]);
}

export default rootReducer;