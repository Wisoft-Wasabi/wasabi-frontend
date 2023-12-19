import AllBoardList from "../../components/boards/AllBoardList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {boardList} from "../../modules/boards";
import {useSearchParams} from "react-router-dom";

const AllBoardListContainer = () => {
    const [page, setPage] = useState(0);
    const [searchParams] = useSearchParams();
    const condition = searchParams.get('sortBy');
    const dispatch = useDispatch();
    const {boards, boardsError, boardsLoading, search, searchError, searchLoading} = useSelector(({boards, search, loading}) => ({
        boards: boards.boards,
        boardsError: boards.boardsError,
        boardsLoading: loading['boards/BOARD_LIST'],
        search: search.search,
        searchError: search.searchError,
        searchLoading: loading['search/SEARCH_KEYWORD'],
    }));

    const onSelectFilter = e => {
        const value = e.target.options[e.target.selectedIndex].value;
        dispatch(boardList({page: 0, condition: value}));
    };

    const handlePage = () => {
        setPage(prev => prev + 1);
    };

    useEffect(() => {
        dispatch(boardList({page: page, condition: condition}));
    }, [page]);

    return (
        <AllBoardList boards={boards}
                      boardsError={boardsError}
                      boardsLoading={boardsLoading}
                      search={search}
                      searchError={searchError}
                      searchLoading={searchLoading}
                      onSelectFilter={onSelectFilter}
                      handlePage={handlePage}
        />
    );
};

export default AllBoardListContainer;