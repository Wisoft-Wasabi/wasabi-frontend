import React, {useCallback, useState} from "react";
import styled from "styled-components";
import Button from "../common/Button";

const TagBoxBlock = styled.div`

`;

const TagBoxContent = styled.div`
  height: 30px;
`;

const TagInput = styled.input`
  height: 100%;
  box-sizing: border-box;
`;

const Tag = styled.div`
  width: fit-content;
  outline: none;
  border: none;
  padding: 7px;
  border-radius: 20px;
  background-color: #4BC75F;
  color: #FFF;
  margin-top: 0.2rem;
`;

const TagItem = React.memo(({tag, onRemove}) => (
    <Tag>
        <span>#{tag}</span>
        <span onClick={onRemove} style={{cursor: "pointer"}}>&nbsp;X</span>
    </Tag>
));

const TagBox = ({onChangeTag, write}) => {
    const [input, setInput] = useState('');

    // 태그 추가
    const insertTag = useCallback(
        (tag) => {
            if (!tag) return; // 공백이면 추가하지 않음
            onChangeTag(tag); // [key]: value -> [tag]: tag
        },
        [onChangeTag],
    );

    // 태그 삭제
    const onRemove = () => {
        onChangeTag(""); // [key]: value -> [tag]: ""
    };

    const onChange = useCallback(
        e => {
            setInput(e.target.value);
        },
        []
    );

    const onInsertTag = useCallback(
        e => {
            if (write.tag === "") {
                e.preventDefault();
                insertTag(input.trim(), e); // input의 앞뒤 공백을 없앤 후 추가
            } else {
                alert("하나의 태그만 등록할 수 있습니다.");
                setInput('');
            }
        },
        [input, insertTag, write.tag]
    );

    const onKeyUp = useCallback(
        e => {
            if (e.key === 'Enter') {
                onInsertTag(e);
            }
        },
        [onInsertTag]
    );

    return (
        <TagBoxBlock>
            <TagBoxContent>
                <TagInput placeholder="태그를 입력하세요."
                          value={input}
                          onChange={onChange}
                          onKeyUp={onKeyUp}
                />
                <Button style={{marginLeft: "0.1rem", height: "100%"}} onClick={onInsertTag}>등록</Button>
            </TagBoxContent>
            {write.tag ? (<TagItem tag={write.tag} onRemove={onRemove}/>) : null}
        </TagBoxBlock>
    );
};

export default TagBox;