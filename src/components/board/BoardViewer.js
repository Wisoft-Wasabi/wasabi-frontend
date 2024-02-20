import WriterViewer from "./WriterViewer";
import {useRef} from "react";
import CommentViewer from "../comment/CommentViewer";

const BoardViewer = ({board}) => {
    const writerInfo = useRef(null);

    const handleMove = () => {
        writerInfo.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const {title, content, writer, createdAt, tag, views, comments} = board.data;

    return (
        <div className='flex flex-col items-center'>
            <div className='w-11/12 mb-10'>
                {tag && <div className='w-fit px-2 py-1 mb-1 text-white text-sm font-semibold rounded-full bg-brand'>{tag}</div>}
                <p className='pb-1 mb-2 text-text1 text-3xl font-semibold border-b border-b-border4'>{title}</p>
                <div className='flex flex-row gap-2 mb-10 text-base text-text4'>
                    <div className='cursor-pointer'
                         onClick={handleMove}
                    >
                        {writer.name} •
                    </div>
                    <div>{new Date(createdAt).toLocaleString()} •</div>
                    <div>{views}명이 조회했어요.</div>
                </div>
                <div className='text-justify text-text2 text-lg overflow-x-auto'
                     dangerouslySetInnerHTML={{__html: content}}
                /> {/* HTML 적용 */}
            </div>
            <div className='w-11/12 flex flex-row p-4 mb-20 gap-4 text-base text-text2 border border-border3'
                 ref={writerInfo}
            >
                <div className='w-fit px-2 py-1 flex items-center text-text1 font-semibold bg-brand rounded-lg'>{writer.name}</div>
                <WriterViewer writer={writer}/>
            </div>
            <p className='w-11/12 float-left pb-1 mb-8 text-text4 text-base font-semibold border-b border-b-border4'>{comments.length}개</p>
            <CommentViewer comments={comments}/>
        </div>
    );
};

export default BoardViewer;