import BoardList from "../../components/boards/BoardList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {boardList} from "../../modules/boards";
import {useNavigate, useSearchParams} from "react-router-dom";

const BoardListContainer = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
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

    const onSelectFilter = (e) => {
        const value = e.target.options[e.target.selectedIndex].value;
        dispatch(boardList(value));
    };

    const onNavigateDetail = (boardId) => {
        navigate(`boards/${boardId}`);
    };

    return (
        <BoardList boards={boards}
                   boardsError={boardsError}
                   loading={loading}
                   onSelectFilter={onSelectFilter}
                   onNavigateDetail={onNavigateDetail}
        />
    );
};

export default BoardListContainer;