export default function CommentEditor ({boardId, content, onChangeCommentEditor}) {
    const onChangeComment = e => {
      onChangeCommentEditor({key: 'comment', value: e.target.value});
    };

    return (
        <>
          <input placeholder="댓글을 입력하세요."
                 value={content}
                 onChange={onChangeComment}
                 className='w-28 h-14'
          />
        </>
    )
}