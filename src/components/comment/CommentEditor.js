
export default function CommentEditor ({content, onChange}) {
    return (
        <>
          <input placeholder="댓글을 입력하세요."
                 name='content'
                 value={content}
                 onChange={onChange}
                 className='border border-gray-300 rounded-lg w-96 h-14 mr-3'
          />
        </>
    )
}