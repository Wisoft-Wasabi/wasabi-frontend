import styled from "styled-components";
import {useEffect, useRef} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const EditorBlock = styled.div`
  margin-top: 5rem;
`;

const TitleInput = styled.input`

`;

const QuillWrapper = styled.div`
    
`;

const Editor = ({title, content, imageUrls, onChangeEditor}) => {
    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance = useRef(null); // Quill 인스턴스를 설정

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder: '내용을 입력하세요.',
            modules: {
                toolbar: [
                    [{header: [1, 2, 3, 4, 5, 6, false]}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block'],
                    // [{script: 'sub'}, {script: 'super'}],
                    ['link', 'image'],
                    [{color: []}, {background: []}],
                    [{align: []}],
                    // ['clean'],
                ],
            },
        });

        const quill = quillInstance.current;
        quill.on('text-change', () => {
            onChangeEditor({key: 'content', value: quill.root.innerHTML});
        })
    }, [onChangeEditor]);

    const onChangeTitle = e => {
        onChangeEditor({key: 'title', value: e.target.value});
    };

    return (
        <EditorBlock>
            <TitleInput placeholder="제목을 입력하세요."
                        value={title}
                        onChange={onChangeTitle}
            />
            <QuillWrapper>
                <div ref={quillElement}/>
            </QuillWrapper>
        </EditorBlock>
    );
};

export default Editor;