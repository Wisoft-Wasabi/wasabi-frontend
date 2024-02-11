export default function CommentButton({onPublish}) {
    return (
        <button className='px-2 py-1 text-white font-semibold rounded-md bg-brand hover:bg-brandAccent'
                onClick={onPublish}
        >
            등록
        </button>
    );
}