import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";

const TagBoxBlock = styled.div`

`;

const TagInput = styled.input`

`;

const Tag = styled.div`
  margin-right: 0.5rem;
`;

const TagListBlock = styled.div`
  margin-top: 0.5rem;
`;

const TagItem = React.memo(({tag, onRemove}) => (
    <Tag>
        <span>#{tag}</span>
        <span onClick={() => onRemove(tag)}>X</span>
    </Tag>
));

const TagList = React.memo(({tags, onRemove}) => (
    <TagListBlock>
        {tags.map(tag => (
            <TagItem key={tag} tag={tag} onRemove={onRemove}/>
        ))}
    </TagListBlock>
));

const TagBox = ({tags, onChangeTags}) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    //기존 태그 배열에 태그 추가
    const insertTag = useCallback(
        (tag, event) => {
            if (!tag) return; // 공백이면 추가하지 않음
            if (localTags.includes(tag)) return; // 이미 존재하는 태그이면 추가하지 않음
            const nextTags = [...localTags, tag];
            setLocalTags(nextTags);
            onChangeTags(nextTags); // [key]: value -> [tags]: nextTags
        },
        [localTags, onChangeTags],
    );

    // 태그 배열에서 태그 삭제
    const onRemove = useCallback(
        tag => {
            const nextTags = localTags.filter(t => t !== tag);
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );

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
                if (tags.length < 1) {
                    e.preventDefault();
                    insertTag(input.trim(), e);
                } else alert("하나의 태그만 등록할 수 있습니다.");
                setInput('');
            }
        },
        [input, insertTag, tags.length]
    );

    useEffect(() => {
        setLocalTags(tags);
    }, [tags]);

    return (
        <TagBoxBlock>
            <TagInput placeholder="태그를 입력하세요."
                      value={input}
                      onChange={onChange}
                      onKeyUp={onKeyUp}
            />
            <TagList tags={localTags} onRemove={onRemove}/>
        </TagBoxBlock>
    );
};

export default TagBox;