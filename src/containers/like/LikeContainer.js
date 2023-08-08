import Like from "../../components/like/Like";
import {useDispatch, useSelector} from "react-redux";
import {cancelLike, getLike, registerLike} from "../../modules/like";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const LikeContainer = () => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const {board, like} = useSelector(({board, like}) => ({
        board: board.board,
        like: like.like,
    }));
    const [likeState, setLikeState] = useState(false);

    // 서버에서 받은 응답이 존재하는지 확인
    useEffect(() => {
        if (board && board.data) {
            setLikeState(board.data.isLike);
            console.log(likeState);
        }
    }, [board, likeState]);

    const onToggleLike = () => {
        if (likeState === false) {
            dispatch(registerLike({boardId}));
        } else if (likeState === true) {
            dispatch(cancelLike({boardId}));
        }
        dispatch(getLike({boardId}));
        if (like && like.data) {
            setLikeState(like.data.isLike);
        }
    };

    return (
        <Like likeState={likeState} onToggleLike={onToggleLike}/>
    );
};

export default LikeContainer;