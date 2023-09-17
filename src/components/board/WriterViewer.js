import styled from "styled-components";

const WriterViewerBlock = styled.div`
  padding: 0;
  border: none;
  border-radius: 6px;
  box-shadow: 0 25px 40px -20px #3c4a56;
  background-color: #f8f8f2;
`;

const WriterContentBox = styled.div`
  padding: 0 55px 55px 55px;
`;

const WriterContent = styled.div`
  margin-bottom: 0.7rem;
`;

const WriterViewer = ({writer}) => {
    return (
        <WriterViewerBlock>
            <WriterContentBox>
                <WriterContent>📧{writer.email}</WriterContent>
                <WriterContent>
                    🔗<a href={writer.referenceUrl} style={{color: "black"}}>{writer.referenceUrl}</a></WriterContent>
                <WriterContent>💻{writer.part}</WriterContent>
                <WriterContent>🏢{writer.organization}</WriterContent>
                <WriterContent>✏️{writer.motto}</WriterContent>
            </WriterContentBox>
        </WriterViewerBlock>
    );
};

export default WriterViewer;