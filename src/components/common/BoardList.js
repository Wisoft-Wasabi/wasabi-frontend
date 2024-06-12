import ThumbNail from "../../assets/thumbnail.jpg";
import {AiOutlineHeart} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {FaRegCommentDots, FaRegEye} from "react-icons/fa";

const BoardCard = ({board, onNavigateDetail}) => {
    const {title, body, writer, createdAt, likeCount, views, commentCount} = board;

    return (
        <div className='flex flex-col w-110 h-100 border-none rounded-lg bg-white shadow-lg m-4 overflow-hidden hover:cursor-pointer hover:-translate-y-3 hover:transition-transform hover:ease-in-out duration-300'
             onClick={onNavigateDetail}
        >
            <img className='w-full h-3/12' src={ThumbNail} alt='ThumbNail'/>
            <div className='flex flex-col px-2 py-5 border-b border-b-border2'>
                <div className='py-1 px-2 mb-1 text-2xl font-bold text-text1'>
                    {title.length > 16
                        ? <p>{[...title].slice(0, 15)}...</p>
                        : <p>{title}</p>}
                </div>
                <div className='py-1 px-2 mb-4 text-xl text-text2'>
                    {body.length > 89
                        ? <p>{[...body].slice(0, 88)}...</p>
                        : <p>{body}</p>}
                </div>
                <div className='py-1 px-2 text-lg text-text1'>
                    {writer.length > 18
                        ? <p><span className='text-base text-text4 mr-1'>by.</span>{[...writer].slice(0, 17)}...</p>
                        : <p><span className='text-base text-text4 mr-1'>by.</span>{writer}</p>}
                </div>
            </div>
            <div className='flex flex-row p-2 justify-between'>
                <div className='flex flex-row py-1 px-2'>
                    <div className='flex flex-row items-center text-lg text-text1 mr-3'>
                        <AiOutlineHeart/>
                        <p className='pl-1'>{likeCount}</p>
                    </div>
                    <div className='flex flex-row items-center text-lg text-text1 mr-3'>
                        <FaRegEye/>
                        <p className='pl-1'>{views}</p>
                    </div>
                    <div className='flex flex-row items-center text-lg text-text1'>
                        <FaRegCommentDots/>
                        <p className='pl-1'>{commentCount}</p>
                    </div>
                </div>
                <div className='text-lg text-text4 py-1 px-2'>{new Date(createdAt).toLocaleDateString()}</div>
            </div>
        </div>
    );
};

const BoardList = ({boards, loading}) => {
    const navigate = useNavigate();

    const onNavigateDetail = (boardId) => {
        navigate(`/boards/${boardId}`);
    };

    return (
        <>
            {!loading && boards && boards.data!==undefined && (
                boards.data.content.length !== 0
                    ? <div className='xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-12 xl:mt-12  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-12 md:mt-12  grid grid-cols-1 gap-12 mt-12'>
                        {boards.data.content.map(board => (
                            <BoardCard board={board}
                                       key={board.id}
                                       onNavigateDetail={() => onNavigateDetail(board.id)}
                            />
                        ))}
                    </div>
                    : <div className='flex mt-20 text-5xl'>관련 게시글이 없습니다.</div>
            )}
        </>
    );
};

export default BoardList;