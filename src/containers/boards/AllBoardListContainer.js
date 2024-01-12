import AllBoardList from "../../components/boards/AllBoardList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {boardList} from "../../modules/boards";
import {useSearchParams} from "react-router-dom";
import InfiniteScroll from "../../components/common/InfiniteScroll";

const AllBoardListContainer = () => {
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [allBoards, setAllBoards] = useState([]);
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
        if (!loadingMore && hasMore) {
            setPage(prev => prev + 1);
            setLoadingMore(true);
        }
    };

    useEffect(() => {
        dispatch(boardList({page: page, condition: condition}));
    }, [page]);

    useEffect(() => {
        if (boards) {
            setAllBoards(prevBoards => [...prevBoards, ...boards.data.content]);
            setLoadingMore(false);
            if (boards.data.content.length === 0) {
                setHasMore(false);
            }
        }
    }, [boards]);

    return (
        <>
            <AllBoardList boards={boards}
                          boardsError={boardsError}
                          boardsLoading={boardsLoading}
                          search={search}
                          searchError={searchError}
                          searchLoading={searchLoading}
                          onSelectFilter={onSelectFilter}
                          onIntersect={handlePage}
                          boardsList={allBoards}
            />
            {!boardsLoading && boards && (
                <InfiniteScroll onIntersect={handlePage} />
            )}
        </>
    );
};

export default AllBoardListContainer;