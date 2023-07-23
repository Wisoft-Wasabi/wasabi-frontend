import BoardViewer from "../../components/board/BoardViewer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {readBoard, unloadBoard} from "../../modules/board";
import {useParams} from "react-router-dom";

const BoardViewerContainer = () => {
    const {boardId} = useParams();
    const dispatch = useDispatch();
    const {board, boardError, loading} = useSelector(({board, loading}) => ({
        board: board.board,
        boardError: board.boardError,
        loading: loading['board/READ_BOARD'],
    }));

    useEffect(() => {
        dispatch(readBoard(boardId));

        // 언마운트될 때 스토어에서 데이터 없애기
        return () => {
            dispatch(unloadBoard());
        };
    }, [dispatch, boardId]);

    return (
        <BoardViewer board={board} boardError={boardError} loading={loading}/>
    );
};

export default BoardViewerContainer;