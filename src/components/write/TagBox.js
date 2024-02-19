import React, {useCallback, useState} from "react";

const TagItem = React.memo(({tag, onRemove}) => (
    <div className='w-fit p-2 text-md rounded-2xl bg-gray-100'>
        <span className=' text-brand'>#{tag}</span>
        <span className='cursor-pointer text-lg font-bold text-text4 hover:text-text3'
              onClick={onRemove}>&nbsp;X</span>
    </div>
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
        <div className='h-24 w-fit'>
            <div className='mb-2'>
                <input className='outline-none text-lg text-text2 border border-gray-300 rounded-lg'
                       placeholder="태그를 입력하세요."
                       value={input}
                       onChange={onChange}
                       onKeyUp={onKeyUp}
                />
                <button
                    className='bg-brand font-bold text-white rounded-md p-1.5 hover:bg-brandAccent'
                    type='button'
                    onClick={onInsertTag}
                >
                    등록
                </button>
            </div>
            {write.tag ? (<TagItem tag={write.tag} onRemove={onRemove}/>) : null}
        </div>
    );
};

export default TagBox;