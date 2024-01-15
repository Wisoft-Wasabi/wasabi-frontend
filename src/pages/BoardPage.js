import BoardViewerContainer from "../containers/board/BoardViewerContainer";
import LikeContainer from "../containers/like/LikeContainer";
import WriteCommentContainer from "../containers/comments/WriteCommentContainer";
import CommentButtonContainer from "../containers/comments/CommentButtonContainer";

const BoardPage = () => {
  return (
    <div>
      <BoardViewerContainer/>
      <LikeContainer/>
      <WriteCommentContainer />
      <CommentButtonContainer />
    </div>
  );
};

export default BoardPage;