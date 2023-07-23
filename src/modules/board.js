import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import * as boardAPI from "../lib/api/board";
import {takeLatest} from "redux-saga/effects";

const [READ_BOARD, READ_BOARD_SUCCESS, READ_BOARD_FAILURE] = createRequestActionTypes('board/READ_BOARD');
const UNLOAD_BOARD = 'board/UNLOAD_BOARD'; // 게시글 페이지에서 벗어날 때 데이터 비우기

export const readBoard = createAction(
    READ_BOARD,
    boardID => boardID,
);

export const unloadBoard = createAction(UNLOAD_BOARD);

// 사가 생성
const readBoardSaga = createRequestSaga(READ_BOARD, boardAPI.readBoard);
export function* boardSaga() {
    yield takeLatest(READ_BOARD, readBoardSaga);
}

const initialState = {
    board: null,
    boardError: null,
};

const board = handleActions(
    {
        [READ_BOARD_SUCCESS]: (state, {payload: board}) => ({
            ...state,
            board,
        }),
        [READ_BOARD_FAILURE]: (state, {payload: boardError}) => ({
            ...state,
            boardError,
        }),
        [UNLOAD_BOARD]: () => initialState,
    },
    initialState,
);

export default board;