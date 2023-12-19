import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as boardAPI from "../lib/api/board";
import {takeLatest} from "redux-saga/effects";

const [BOARD_LIST, BOARD_LIST_SUCCESS, BOARD_LIST_FAILURE] = createRequestActionTypes('boards/BOARD_LIST');

export const boardList = createAction(
    BOARD_LIST,
    ({page, condition}) => ({page, condition}),
);

// 사가 생성
const boardListSaga = createRequestSaga(BOARD_LIST, boardAPI.boardList);
export function* boardsSaga() {
    yield takeLatest(BOARD_LIST, boardListSaga);
}

const initialState = {
    boards: null,
    boardsError: null,
};

const boards = handleActions(
    {
        [BOARD_LIST_SUCCESS]: (state, {payload: boards}) => ({
            ...state,
            boards,
        }),
        [BOARD_LIST_FAILURE]: (state, {payload: boardsError}) => ({
            ...state,
            boardsError,
        }),
    },
    initialState,
);

export default boards;
