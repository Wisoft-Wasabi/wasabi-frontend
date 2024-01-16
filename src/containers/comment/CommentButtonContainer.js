import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {writeComment} from "../../modules/comment";
import {useEffect} from "react";
import CommentButton from "../../components/comment/CommentButton";

export default function CommentButtonContainer () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {boardId, content, comment, commentError, loading} = useSelector(({comment, loading}) => ({
    boardId: comment.boardId,
    content: comment.content,
    comment: comment.comment,
    commentError: comment.commentError,
    loading: loading['comment/WRITE_COMMENT'],
  }));

  const onPublish = () => {
    dispatch(writeComment({
      boardId,
      content,
      }),
    );
  };

  useEffect(() => {
    if (!loading && comment) {
      alert('댓글이 등록 되었습니다.');
    }

    if (!loading && commentError) {
      alert('댓글 등록에 실패 했습니다.');
    }
  }, [loading]);

    return (
        <CommentButton onPublish={onPublish}/>
    );
};