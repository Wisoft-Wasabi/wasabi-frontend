import styled from "styled-components";

const BoardViewerBlock = styled.div`

`;

const BoardHead = styled.div`

`;

const SubInfo = styled.div`
  margin-top: 1rem;

  /* span 사이에 가운뎃점 문자 넣기 */
  span + span:before {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\\\B7'; /* 가운뎃점 문자 */
  }
`;

const BoardContent = styled.div`

`;

const Tags = styled.div`

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

    const {title, content, writer, createDate, tags} = board.data;

    return (
        <BoardViewerBlock>
            <BoardHead>
                <h1>{title}</h1>
                <SubInfo>
                    <span><b>{writer}</b></span>
                    <span>{new Date(createDate).toLocaleString()}</span>
                </SubInfo>
            </BoardHead>
            <BoardContent dangerouslySetInnerHTML={{_html: content}}/> {/* HTML 적용 */}
            <Tags>
                {tags.map(tag => (
                    <div className="tag">#{tag}</div>
                ))}
            </Tags>
        </BoardViewerBlock>
    );
};

export default BoardViewer;