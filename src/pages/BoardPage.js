import BoardViewerContainer from "../containers/board/BoardViewerContainer";
import LikeContainer from "../containers/like/LikeContainer";

const BoardPage = () => {
    return (
        <div>
            <BoardViewerContainer/>
            <LikeContainer/>
        </div>
    );
};

export default BoardPage;