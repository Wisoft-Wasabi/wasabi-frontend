import createRequestSaga, {createRequestActionTypes} from "../lib/createRequestSaga";
import {createAction, handleActions} from "redux-actions";
import {takeLatest} from "redux-saga/effects";
import * as commentAPI from "../lib/api/comment";

const INITIALIZE = 'comments/INITIALIZE';
const CHANGE_FIELD = 'comments/CHANGE_FIELD';
const [WRITE_COMMENT, WRITE_COMMENT_SUCCESS, WRITE_COMMENT_FAILURE] = createRequestActionTypes('comments/WRITE_COMMENT');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({key, value}) => ({key, value})
);
export const writeComment = createAction(
  WRITE_COMMENT,
  ({boardId, content}) => ({boardId, content})
)

// 사가 생성
const writeCommentSaga = createRequestSaga(WRITE_COMMENT, commentAPI.writeComment);
export function* commentSaga() {
  yield takeLatest(WRITE_COMMENT, writeCommentSaga);
}

const initialState = {
  boardId: '',
  content: '',
  comment: null,
  commentError: null,
}

const comment = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_COMMENT]: (state) => ({
      ...state,
      comment: null,
      commentError: null,
    }),
    [WRITE_COMMENT_SUCCESS]: (state, {payload: comment}) => ({
      ...state,
      comment,
    }),
    [WRITE_COMMENT_FAILURE]: (state, {payload: commentError}) => ({
      ...state,
      commentError: null,
    }),
  },
  initialState,
);

export default comment;