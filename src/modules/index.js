import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import {all} from "redux-saga/effects";
import loading from "./loading";
import write, {writeSaga} from "./write";
import board, {boardSaga} from "./board";
import like, {likeSaga} from "./like";
import boards, {boardsSaga} from "./boards";

const rootReducer = combineReducers({
    loading,
    auth,
    write,
    board,
    like,
    boards,
});

export function* rootSaga() {
    yield all([authSaga(), writeSaga(), boardSaga(), likeSaga(), boardsSaga()]);
}

export default rootReducer;