import {useNavigate} from "react-router-dom";
import { BiMessageAltError } from "react-icons/bi";

export default function Error() {
    const navigate = useNavigate();

    return (
        <div
            className='flex flex-col items-center justify-center absolute w-full h-full'
        >
            <div className='font-bold text-brand text-[12rem]'><BiMessageAltError /></div>
            <div className='text-4xl mt-5 mb-10'>알 수 없는 에러</div>
            <button
                className='w-[200px] px-3 py-2 text-xl text-gray-500 font-semibold bg-neutral-200 rounded-full hover:bg-neutral-300'
                onClick={() => navigate('/')}>
                홈으로 가기
            </button>
        </div>
    );
}