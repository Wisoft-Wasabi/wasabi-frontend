import AllBoardList from "../../components/boards/AllBoardList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {boardList} from "../../modules/boards";
import {useSearchParams} from "react-router-dom";

const AllBoardListContainer = () => {
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

    const onSelectFilter = (e) => {
        const value = e.target.options[e.target.selectedIndex].value;
        dispatch(boardList(value));
    };

    return (
        <AllBoardList boards={boards}
                      boardsError={boardsError}
                      loading={loading}
                      onSelectFilter={onSelectFilter}
        />
    );
};

export default AllBoardListContainer;