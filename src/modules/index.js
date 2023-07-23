import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import {all} from "redux-saga/effects";
import loading from "./loading";
import write, {writeSaga} from "./write";
import board, {boardSaga} from "./board";

const rootReducer = combineReducers({
    loading,
    auth,
    write,
    board,
});

export function* rootSaga() {
    yield all([authSaga(), writeSaga(), boardSaga()]);
}

export default rootReducer;