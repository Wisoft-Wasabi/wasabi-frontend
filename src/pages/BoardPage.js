import BoardViewerContainer from "../containers/board/BoardViewerContainer";
import LikeContainer from "../containers/like/LikeContainer";
import WriteCommentContainer from "../containers/comment/WriteCommentContainer";
import CommentButtonContainer from "../containers/comment/CommentButtonContainer";

const BoardPage = () => {
    return (
        <div className='flex flex-row px-52 mb-20 mt-20'>
            <div className='flex flex-col basis-11/12'>
                <BoardViewerContainer/>
                <div className='w-full flex flex-col items-center'>
                    <WriteCommentContainer/>
                    <CommentButtonContainer/>
                </div>
            </div>
            <LikeContainer className='basis-1/12 flex justify-center fixed top-1/2 right-60'/>
        </div>
    );
};

export default BoardPage;