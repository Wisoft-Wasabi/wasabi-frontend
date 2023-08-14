import styled from "styled-components";
import {BiShow} from "react-icons/bi";
import ThumbNail from "../../assets/thumbNail.jpg";
import FillLike from "../../assets/fill.png";

const BoardListBlock = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0 auto;
  margin-top: 3rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const BoardCardBlock = styled.div`
  width: 320px;
  height: 360px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  max-width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 10px 5px #f2f5f7;
  border-radius: 10px;
  border: 1px solid #f2f5f7;
  overflow: hidden;
  margin: 3rem 1.5rem;
  cursor: pointer;

  h2 {
    font-size: 2rem;
    margin: 0.5rem 0;
    padding-left: 0.6rem;
  }
`;

const BoardImage = styled.img`
  position: relative;
  width: 100%;
  height: 56.25%;
  object-fit: cover;
`;

const SubInfo = styled.div`
  padding-left: 0.6rem;

  span + span:before {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    content: '\\B7';
  }
`;

const CountInfo = styled.div`
  padding-left: 0.6rem;
  margin-top: 2.5rem;

  span + span {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const LikeImage = styled.img`
  width: 18px;
  height: 18px;
  object-fit: cover;
`;

const SelectBox = styled.select`
  margin-top: 1rem;
  margin-right: 10rem;
  float: right;

`;

const BoardCard = ({board, onNavigateDetail}) => {
    const {title, writer, createdAt, likeCount, views} = board;

    return (
        <BoardCardBlock onClick={onNavigateDetail}>
            <BoardImage src={ThumbNail}/>
            <h2><b>{title}</b></h2>
            <SubInfo>
                <span>{writer}</span>
                <span>{new Date(createdAt).toLocaleString()}</span>
            </SubInfo>
            <CountInfo>
                <span><LikeImage src={FillLike}/>{likeCount}</span>
                <span><BiShow/>{views}</span>
            </CountInfo>
        </BoardCardBlock>
    );
};

const BoardList = ({boards, boardsError, loading, onSelectFilter, onNavigateDetail}) => {
    if (boardsError) {
        return <BoardListBlock>에러 발생!</BoardListBlock>
    }

    return (
        <>
            <SelectBox onChange={e => onSelectFilter(e)}>
                <option value="">== 정렬 기준 ==</option>
                <option key="latest" value="latest">최신순</option>
                <option key="likes" value="likes">좋아요순</option>
                <option key="views" value="views">조회수순</option>
            </SelectBox>
            <BoardListBlock>
                {!loading && boards && (
                    <div>
                        {boards.data.content.map(board => (
                            <BoardCard board={board} key={board.id} onNavigateDetail={() => onNavigateDetail(board.id)}/>
                        ))}
                    </div>
                )}
            </BoardListBlock>
        </>
    );
};

export default BoardList;