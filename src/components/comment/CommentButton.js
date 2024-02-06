export default function CommentButton ({onPublish}) {
    
    return (
        <>
            <button onClick={onPublish}
                    className='border border-gray-300 rounded-lg w-12 h-10 hover:bg-gray-300'
            >등록</button>
        </>
    )
}