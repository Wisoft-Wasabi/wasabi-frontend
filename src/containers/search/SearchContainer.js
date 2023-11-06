import {useDispatch, useSelector} from "react-redux";
import {changeField, searchKeyword} from "../../modules/search";
import {useCallback} from "react";
import MainHeader from "../../components/base/header/MainHeader";

const SearchContainer = () => {
    const dispatch = useDispatch();
    const {keyword, search, searchError, searchLoading} = useSelector(({search, loading}) => ({
        keyword: search.keyword,
        search: search.search,
        searchError: search.searchError,
        searchLoading: loading['search/SEARCH_KEYWORD'],
    }));

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
        <MainHeader keyword={keyword}
                    search={search}
                    searchError={searchError}
                    searchLoading={searchLoading}
                    onChangeKeyword={onChangeKeyword}
                    onSearchKeyword={onSearchKeyword}
        />
    );
};

export default SearchContainer;