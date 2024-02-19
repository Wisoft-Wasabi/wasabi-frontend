import {useNavigate} from "react-router-dom";

export default function ErrorPage({text, img}) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center mt-48'>
            <img className='w-[300px] h-[200px] mb-5' src={img}/>
            <p className='mb-5 text-2xl text-text1 font-semibold'>{text}</p>
            <button className='w-[200px] px-3 py-2 text-xl text-gray-400 font-semibold bg-neutral-200 rounded-full hover:bg-neutral-300'
                    onClick={() => navigate('/')}>
                홈으로 가기
            </button>
        </div>
    );
}
