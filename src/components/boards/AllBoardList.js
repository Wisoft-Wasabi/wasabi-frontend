import styled from "styled-components";
import BoardList from "../common/BoardList";

const SelectBox = styled.select`
  margin-top: 1rem;
  margin-right: 10rem;
  float: right;

`;

const AllBoardList = ({boards, boardsError, loading, onSelectFilter, onNavigateDetail}) => {
    if (boardsError) {
        return <div>에러 발생!</div>
    }

    return (
        <>
            <SelectBox onChange={e => onSelectFilter(e)}>
                <option value="">== 정렬 기준 ==</option>
                <option key="latest" value="latest">최신순</option>
                <option key="likes" value="likes">좋아요순</option>
                <option key="views" value="views">조회수순</option>
            </SelectBox>
            <BoardList boards={boards} loading={loading} onNavigateDetail={onNavigateDetail}/>
        </>
    );
};

export default AllBoardList;