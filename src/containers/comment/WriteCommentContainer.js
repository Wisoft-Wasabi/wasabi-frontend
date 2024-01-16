import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {changeField, initialize} from "../../modules/comment";
import CommentEditor from "../../components/comment/CommentEditor";


export default function WriteCommentContainer ()  {
  const dispatch = useDispatch();
  const {boardId, content} = useSelector(({comment}) => ({
    boardId: comment.boardId,
    content: comment.content
  }));

  const onChangeCommentEditor = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <CommentEditor boardId={boardId} content={content} onChange={onChangeCommentEditor}/>
  );
};