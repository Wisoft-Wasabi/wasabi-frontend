export default function CommentButton ({onPublish}) {
    
    return (
        <>
            <button onClick={onPublish}
                    className='border-2 w-2 h-1'
            ></button>
        </>
    )
}