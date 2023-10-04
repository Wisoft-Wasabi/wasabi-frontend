import styled from "styled-components";
import BoardList from "../common/BoardList";

const SelectBox = styled.select`
  margin-top: 1rem;
  margin-right: 10rem;
  float: right;

`;

const AllBoardList = ({boards, boardsError, keyword, search, searchError, boardListLoading, searchKeywordLoading, onSelectFilter, onChangeKeyword, onSearchKeyword, onNavigateDetail}) => {
    if (boardsError) {
        return <div>에러 발생!</div>
    }

    return (
        <>
            <input name="keyword"
                   value={keyword}
                   placeholder="검색할 키워드를 입력하세요."
                   onChange={e => onChangeKeyword(e)}
                   onKeyUp={onSearchKeyword}
            />
            <SelectBox onChange={e => onSelectFilter(e)}>
                <option value="">== 정렬 기준 ==</option>
                <option key="latest" value="latest">최신순</option>
                <option key="likes" value="likes">좋아요순</option>
                <option key="views" value="views">조회수순</option>
            </SelectBox>
            {
                search ? <BoardList boards={search} loading={searchKeywordLoading} onNavigateDetail={onNavigateDetail}/> :
                    <BoardList boards={boards} loading={boardListLoading} onNavigateDetail={onNavigateDetail}/>
            }
        </>
    );
};

export default AllBoardList;