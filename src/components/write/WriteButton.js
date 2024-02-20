const WriteButton = ({onPublish}) => {
    return (
        <button
            className=' w-40 h-10 bg-brand text-lg text-white font-bold rounded-md hover:bg-brandAccent'
            type='button'
            onClick={onPublish}>출간하기</button>
    );
};

export default WriteButton;