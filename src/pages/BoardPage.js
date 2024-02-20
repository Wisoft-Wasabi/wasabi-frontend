import BoardViewerContainer from "../containers/board/BoardViewerContainer";
import LikeContainer from "../containers/like/LikeContainer";
import WriteCommentContainer from "../containers/comment/WriteCommentContainer";
import CommentButtonContainer from "../containers/comment/CommentButtonContainer";
import {useSelector} from "react-redux";
import {DotLoader} from "react-spinners";
import NotFound from "../components/base/NotFound";
import Error from "../components/base/Error";

const BoardPage = () => {
    const {board, boardError, loading} = useSelector(({board, loading}) => ({
        board: board.board,
        boardError: board.boardError,
        loading: loading['board/READ_BOARD'],
    }));

    // 에러 발생 시
    if (boardError) {
        if (boardError.response.status === 404) {
            return <div><NotFound /></div>
        }

        return <div><Error /></div>
    }

    // 로딩 중이거나 아직 포스트 데이터가 없을 때
    if (loading || !board) {
        return (
            <div className='flex flex-col w-full h-screen items-center justify-center'
            >
                <DotLoader color='#61C08E'/>
            </div>
        );
    }

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