import styled from "styled-components";
import {BiShow} from "react-icons/bi";

const BoardViewerBlock = styled.div`
    margin-top: 4rem;
`;

const BoardHead = styled.div`
  border-bottom: 1px solid darkgrey;
  padding-bottom: 2rem;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;

  /* span 사이에 가운뎃점 문자 넣기 */
  span + span:before {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const BoardContent = styled.div`
    font-size: 1.3125rem;
`;

const Tags = styled.div`
    margin-top: 0.5rem;
  
  .tag {
    display: inline-block;
    color: #4BC75F;
    text-decoration: none;
    margin-right: 0.5rem;
    
    &:hover {
      color: #9FCF58;
    }
  }
`;

const BoardViewer = ({board, boardError, loading}) => {
    // 에러 발생 시
    if (boardError) {
        if (boardError.response && boardError.response.status === 400) {
            return <BoardViewerBlock>존재하지 않는 포스트입니다.</BoardViewerBlock>
        }
        return <BoardViewerBlock>오류 발생!</BoardViewerBlock>
    }

    // 로딩 중이거나 아직 포스트 데이터가 없을 때
    if (loading || !board) {
        return null;
    }

    const {title, content, writer, createdDate, tags, views} = board.data;

    return (
        <BoardViewerBlock>
            <BoardHead>
                <h1>{title}</h1>
                <SubInfo>
                    <span><b>{writer}</b></span>
                    <span>{new Date(createdDate).toLocaleString()}</span>
                    <span><BiShow/>{views}</span>
                </SubInfo>
            </BoardHead>
            <BoardContent dangerouslySetInnerHTML={{__html: content}}/> {/* HTML 적용 */}
            <Tags>
                {tags.map(tag => (
                    <div className="tag">#{tag}</div>
                ))}
            </Tags>
        </BoardViewerBlock>
    );
};

export default BoardViewer;