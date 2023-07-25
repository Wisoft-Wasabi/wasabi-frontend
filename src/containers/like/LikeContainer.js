import Like from "../../components/like/Like";
import {useDispatch, useSelector} from "react-redux";
import {cancelLike, registerLike} from "../../modules/like";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const LikeContainer = () => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const board = useSelector(state => state.board.board);
    const [like, setLike] = useState(false);

    // 서버에서 받은 응답이 존재하는지 확인
    useEffect(() => {
        if (board && board.data) {
            setLike(board.data.isLike);
        }
    }, [board]);

    const onToggleLike = () => {
        if (board && board.data) {
            if (like === false) {
                setLike(!like);
                dispatch(registerLike(boardId));
            } else if (like === true) {
                setLike(!like);
                dispatch(cancelLike(boardId));
            }
        } else {
            console.log('NO Data.');
        }
    };

    return (
        <Like like={like} onToggleLike={onToggleLike}/>
    );
};

export default LikeContainer;