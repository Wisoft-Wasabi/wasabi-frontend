import BoardList from "../../components/boards/BoardList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {boardList} from "../../modules/boards";
import {useSearchParams} from "react-router-dom";

const BoardListContainer = () => {
    const [searchParams] = useSearchParams();
    const condition = searchParams.get('sortBy');
    const dispatch = useDispatch();
    const {boards, boardsError, loading} = useSelector(({boards, loading}) => ({
        boards: boards.boards,
        boardsError: boards.boardsError,
        loading: loading['boards/BOARD_LIST'],
    }));

    useEffect(() => {
        dispatch(boardList(condition));
    }, [dispatch, condition]);

    return (
        <BoardList boards={boards} boardsError={boardsError} loading={loading}/>
    );
};

export default BoardListContainer;