import React, {useCallback, useState} from "react";
import styled from "styled-components";

const TagBoxBlock = styled.div`

`;

const TagInput = styled.input`

`;

const Tag = styled.div`
  margin-right: 0.5rem;
`;

const TagItem = React.memo(({tag, onRemove}) => (
    <Tag>
        <span>#{tag}</span>
        <span onClick={onRemove}>X</span>
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

    // Enter 누르면 input을 앞뒤 공백 없앤 후 추가
    const onKeyUp = useCallback(
        e => {
            if (e.key === 'Enter') {
                if (write.tag === "") {
                    e.preventDefault();
                    insertTag(input.trim(), e);
                } else alert("하나의 태그만 등록할 수 있습니다.");
                setInput('');
            }
        },
        [input, insertTag, write.tag]
    );

    return (
        <TagBoxBlock>
            <TagInput placeholder="태그를 입력하세요."
                      value={input}
                      onChange={onChange}
                      onKeyUp={onKeyUp}
            />
            {write.tag ? (<TagItem tag={write.tag} onRemove={onRemove}/>) : null}
        </TagBoxBlock>
    );
};

export default TagBox;