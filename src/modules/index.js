import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import {all} from "redux-saga/effects";
import loading from "./loading";
import write, {writeSaga} from "./write";

const rootReducer = combineReducers({
    loading,
    auth,
    write,
});

export function* rootSaga() {
    yield all([authSaga(), writeSaga()]);
}

export default rootReducer;