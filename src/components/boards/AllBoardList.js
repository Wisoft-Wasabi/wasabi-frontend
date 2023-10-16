import styled from "styled-components";
import BoardList from "../common/BoardList";

const SelectBox = styled.select`
  margin-top: 1rem;
  margin-right: 10rem;
  float: right;

`;

const AllBoardList = ({boards, boardsError, boardsLoading, search, searchError, searchLoading, onSelectFilter, onNavigateDetail}) => {
    if (boardsError) {
        return <div>게시글 목록 조회 에러 발생!</div>
    }

    if (searchError) {
        return <div>키워드 검색 조회 에러 발생!</div>
    }

    return (
        <>
            <SelectBox onChange={e => onSelectFilter(e)}>
                <option value="">== 정렬 기준 ==</option>
                <option key="latest" value="latest">최신순</option>
                <option key="likes" value="likes">좋아요순</option>
                <option key="views" value="views">조회수순</option>
            </SelectBox>
            { search ? <BoardList boards={search} loading={searchLoading} onNavigateDetail={onNavigateDetail}/> :
                <BoardList boards={boards} loading={boardsLoading} onNavigateDetail={onNavigateDetail}/>
            }
        </>
    );
};

export default AllBoardList;