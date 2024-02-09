import BoardViewerContainer from "../containers/board/BoardViewerContainer";
import LikeContainer from "../containers/like/LikeContainer";
import WriteCommentContainer from "../containers/comment/WriteCommentContainer";
import CommentButtonContainer from "../containers/comment/CommentButtonContainer";

const BoardPage = () => {
    return (
        <div className='flex flex-row px-52'>
            <div className='flex flex-col basis-11/12'>
                <BoardViewerContainer/>
                <WriteCommentContainer/>
                <CommentButtonContainer/>
            </div>
            <LikeContainer className='basis-1/12'/>
        </div>
    );
};

export default BoardPage;