import AllBoardList from "../../components/boards/AllBoardList";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {boardList} from "../../modules/boards";
import {useSearchParams} from "react-router-dom";
import {changeField, searchKeyword} from "../../modules/search";

const AllBoardListContainer = () => {
    const [searchParams] = useSearchParams();
    const condition = searchParams.get('sortBy');
    const dispatch = useDispatch();
    const {boards, boardsError, keyword, search, searchError, boardListLoading, searchKeywordLoading} = useSelector(({boards, search, loading}) => ({
        boards: boards.boards,
        boardsError: boards.boardsError,
        keyword: search.keyword,
        search: search.search,
        searchError: search.searchError,
        boardListLoading: loading['boards/BOARD_LIST'],
        searchKeywordLoading: loading['search/SEARCH_KEYWORD'],
    }));

    useEffect(() => {
        dispatch(boardList(condition));
    }, [dispatch, condition]);

    const onSelectFilter = (e) => {
        const value = e.target.options[e.target.selectedIndex].value;
        dispatch(boardList(value));
    };

    const onChangeKeyword = e => {
        dispatch(changeField({
                key: 'keyword',
                value: e.target.value,
            }),
        );
    };

    const onSearchKeyword = useCallback(
        e => {
            if (e.key === 'Enter') {
                dispatch(searchKeyword(keyword));
            }
        },
        [dispatch, keyword]
    );

    return (
        <AllBoardList boards={boards}
                      boardsError={boardsError}
                      keyword={keyword}
                      search={search}
                      searchError={searchError}
                      boardListLoading={boardListLoading}
                      searchKeywordLoading={searchKeywordLoading}
                      onSelectFilter={onSelectFilter}
                      onChangeKeyword={onChangeKeyword}
                      onSearchKeyword={onSearchKeyword}
        />
    );
};

export default AllBoardListContainer;