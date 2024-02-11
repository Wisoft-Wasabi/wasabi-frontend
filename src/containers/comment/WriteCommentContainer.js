import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {changeField, initialize} from "../../modules/comment";
import CommentEditor from "../../components/comment/CommentEditor";

export default function WriteCommentContainer ()  {
  const dispatch = useDispatch();
  const {content} = useSelector(({comment}) => ({
    content: comment.content
  }));

  const handleChange = e => {
    const {name, value} = e.target;

    dispatch(changeField({
      key: name,
      value
    }))
  };

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <CommentEditor content={content} onChange={handleChange}/>
  );
};