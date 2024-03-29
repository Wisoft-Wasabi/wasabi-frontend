import {useDispatch, useSelector} from "react-redux";
import {writeComment} from "../../modules/comment";
import {useEffect} from "react";
import CommentButton from "../../components/comment/CommentButton";
import {useParams} from "react-router-dom";
import {readBoard} from "../../modules/board";

export default function CommentButtonContainer () {
  const params = useParams();
  const dispatch = useDispatch();
  const {content, comment, commentError, loading} = useSelector(({comment, loading}) => ({
    content: comment.content,
    comment: comment.comment,
    commentError: comment.commentError,
    loading: loading['comment/WRITE_COMMENT'],
  }));

  const handlePublish = () => {
    dispatch(writeComment({
      boardId: params.boardId,
      content,
      }),
    );
  };

  useEffect(() => {
    if (!loading && comment) {
      dispatch(readBoard(params.boardId));
    }

    if (!loading && commentError) {
      alert('댓글 등록에 실패 했습니다.');
    }
  }, [loading]);

    return (
        <CommentButton onPublish={handlePublish}/>
    );
};