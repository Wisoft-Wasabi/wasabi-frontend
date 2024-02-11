export default function CommentEditor({content, onChange}) {
    return (
        <textarea className='w-11/12 h-[70px] px-2 py-1 mb-2 resize-none border border-border3 focus:outline-none'
                  placeholder="댓글을 입력하세요."
                  name='content'
                  value={content}
                  onChange={onChange}
        />
    )
}