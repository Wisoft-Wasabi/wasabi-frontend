import BoardViewerContainer from "../containers/board/BoardViewerContainer";
import LikeContainer from "../containers/like/LikeContainer";
import WriteCommentContainer from "../containers/comment/WriteCommentContainer";
import CommentButtonContainer from "../containers/comment/CommentButtonContainer";

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