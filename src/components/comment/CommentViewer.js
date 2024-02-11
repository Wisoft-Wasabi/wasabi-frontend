const Comment = ({comment}) => {
    const member  = JSON.parse(localStorage.getItem('member'));
    const {writerId, writer, content, isBoardWriter, createdAt} = comment;

    return (
        <div className='flex flex-row gap-4'>
            <div className='w-16 h-16 basis-1/12 flex justify-center items-center text-text1 text-xl font-semibold rounded-full bg-brand'>{writer.charAt(0)}</div>
            <div className='basis-11/12 flex flex-col py-3 px-5 w-7/12 border border-border2'>
                <div className='flex flex-row justify-between items-center mb-2 text-sm text-text2'>
                    {isBoardWriter ? <div className='w-fit px-2 py-1 text-white font-semibold rounded-xl bg-brand opacity-90'>게시글 작성자</div> : null}
                    {member.data.id === writerId ? <button className='underline'>수정</button> : null}
                </div>
                <p className='mb-6 text-lg text-text1'>{content}</p>
                <div className='flex flex-row-reverse text-base text-text4 gap-2'>
                    <div>{createdAt}</div>
                    <div>{writer} •</div>
                </div>
            </div>
        </div>
    );
};

const CommentViewer = ({comments}) => {
    if (comments.length === 0) return <div>처음으로 댓글을 등록해 보세요!</div>;

    return (
        <div className='w-11/12 flex flex-col mb-10 gap-8'>
            {comments.map(comment =>
                <Comment key={comment.id}
                         comment={comment}
                />
            )}
        </div>
    );
};

export default CommentViewer;