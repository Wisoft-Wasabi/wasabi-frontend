import {combineReducers} from "redux";
import auth, {authSaga} from "./auth";
import {all} from "redux-saga/effects";
import loading from "./loading";
import write, {writeSaga} from "./write";
import board, {boardSaga} from "./board";
import like, {likeSaga} from "./like";
import boards, {boardsSaga} from "./boards";
import myPage, {myPageSaga} from "./mypage";
import admin, {adminSaga} from "./admin";
import search, {searchSaga} from "./search";
import comment, {commentSaga} from "./comment";
import email, {emailSaga} from "./email";

const rootReducer = combineReducers({
    loading,
    auth,
    write,
    board,
    like,
    boards,
    myPage,
    admin,
    search,
    comment,
    email,
});

export function* rootSaga() {
    yield all([authSaga(), writeSaga(), boardSaga(), likeSaga(), boardsSaga(), myPageSaga(), adminSaga(), searchSaga(), commentSaga(), emailSaga()]);
}

export default rootReducer;