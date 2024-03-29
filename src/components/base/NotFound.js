import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div
            className='flex flex-col items-center justify-center absolute w-full h-full'
        >
            <div className='font-bold text-brand text-[10rem] font-mono'>404</div>
            <div className='text-4xl mb-10'>요청한 페이지를 찾을 수 없습니다😯</div>
            <button
                className='w-[200px] px-3 py-2 text-xl text-gray-500 font-semibold bg-neutral-200 rounded-full hover:bg-neutral-300'
                onClick={() => navigate('/')}>
                홈으로 가기
            </button>
        </div>
    );
};

export default NotFound;