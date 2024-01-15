const Comment = ({comment}) => {
    const member  = JSON.parse(localStorage.getItem('member'));
    const {writerId, writer, content, isBordWriter, createdAt} = comment;

    return (
        <div className='flex flex-row p-3 mb-5'>
            <div className='w-16 h-16 rounded-full bg-brand flex justify-center items-center text-2xl font-semibold text-text1 mr-5'>{writer.charAt(0)}</div>
            <div className='flex flex-col py-3 px-5 w-7/12 border border-border2'>
                <div className='flex flex-row justify-between items-center mb-1'>
                    {isBordWriter ? <div className='rounded-xl bg-brand opacity-90 py-1 px-1.5 text-base font-semibold text-white'>게시글 작성자</div> : null}
                    {member.data.id === writerId ? <button className='text-base text-text4 underline'>수정</button> : null}
                </div>
                <p className='mt-3 mb-4 text-2xl text-text1'>{content}</p>
                <div className='text-lg text-text2 text-right'>
                    <span className='mr-1'>{writer}</span>
                    <span className='mr-1'>•</span>
                    <span>{createdAt}</span>
                </div>
            </div>
        </div>
    );
};

const CommentViewer = ({comments}) => {
    if (comments.length === 0) return <div>처음으로 댓글을 등록해 보세요!</div>;

    return (
        <div className='w-full flex flex-col'>
            {comments.map(comment =>
                <Comment key={comment.id}
                         comment={comment}
                />
            )}
        </div>
    );
};

export default CommentViewer;