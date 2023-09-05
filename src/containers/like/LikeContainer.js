import Like from "../../components/like/Like";
import {useDispatch, useSelector} from "react-redux";
import {cancelLike, getLike, registerLike} from "../../modules/like";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const LikeContainer = () => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const {board, like, loadingRegister, loadingCancel} = useSelector(({board, like, loading}) => ({
        board: board.board,
        like: like.like,
        loadingRegister: loading['like/REGISTER_LIKE'],
        loadingCancel: loading['like/CANCEL_LIKE'],
    }));
    const [likeState, setLikeState] = useState(false);

    // 게시글 상세 조회에 대해 서버에서 받은 응답이 존재하는지 확인
    useEffect(() => {
        if (board && board.data) {
            setLikeState(board.data.isLike);
        }
    }, [board, likeState]);

    const onToggleLike = () => {
        if (!likeState) {
            dispatch(registerLike({boardId}));
        } else {
            dispatch(cancelLike({boardId}));
        }
    };

    // 좋아요 등록/취소 요청이 끝났는지 확인
    useEffect(() => {
        if (!loadingRegister || !loadingCancel) {
            dispatch(getLike({boardId}));
        }
    }, [loadingRegister, loadingCancel, dispatch, boardId]);

    // 좋아요 상태 조회에 대해 서버에서 받은 응답이 존재하는지 확인
    useEffect(() => {
        if (like && like.data) {
            setLikeState(like.data.isLike);
        }
    }, [like, likeState]);

    return (
        <Like likeState={likeState} onToggleLike={onToggleLike}/>
    );
};

export default LikeContainer;