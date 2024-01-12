import ThumbNail from "../../assets/thumbnail.jpg";
import {AiOutlineHeart} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {GoPencil} from "react-icons/go";
import { FaRegEye } from "react-icons/fa";

const BoardCard = ({board, onNavigateDetail}) => {
    const {title, writer, createdAt, likeCount, views, body} = board;

    return (
      <div className='flex flex-col w-80 h-96 border-none rounded-lg bg-white shadow-lg m-4 overflow-hidden hover:cursor-pointer hover:-translate-y-3 hover:transition-transform hover:ease-in-out duration-300' onClick={onNavigateDetail}>
          <img className='w-full h-44' src={ThumbNail} alt='ThumbNail'/>
          <div className='flex flex-col border px-5 py-5'>
          {title.length > 16 ? <h2 className='px-0 pb-3 text-xl font-bold text-text1'>{[...title].slice(0, 15)}...</h2> : <h2 className='px-0 pb-3 text-xl font-bold text-text1'>{title}</h2> }
          {body.length > 89 ? <p className='text-xs text-text3'>{[...body].slice(0, 88)}...</p> : <p className='text-xs text-text3'>{body}</p>}
            <div className='flex flex-row text-sm pt-3 text-text1'>
              {writer.length > 18 ? <p className='px-1 font-medium text-text2'>by. {[...writer].slice(0, 17)}...</p> : <p className='px-1 font-medium text-text2'>by. {writer}</p>}
            </div>
      </div>
          <div className='flex flex-row py-2 px-4 space-x-24'>
            <div className='flex flex-row'>
              <p className='flex flex-row items-center text-lg pl-2'>
                    <AiOutlineHeart/>
                    <p className='pl-2'>{likeCount}</p>
                </p>
              <p className='flex flex-row items-center text-lg pl-3'>
                    <FaRegEye/>
                    <p className='pl-2'>{views}</p>
                </p>
            </div>
            <p className='text-sm text-text3 pl-1.5 py-1.5'>{new Date(createdAt).toLocaleDateString()}</p>
          </div>
      </div>
    );
};

const BoardList = ({boards, loading, boardsList}) => {
    const navigate = useNavigate();

    const onNavigateDetail = (boardId) => {
        navigate(`/boards/${boardId}`);
    };

    return (
      <>
          {!loading && boards && (
                  boardsList.length !== 0 ?
                  <div className='xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-12 xl:mt-12  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-12 md:mt-12  grid grid-cols-1 gap-12 mt-12'>
                      {boardsList.map(board => (
                      <BoardCard
                        board={board}
                        key={board.id}
                        onNavigateDetail={() => onNavigateDetail(board.id)}
                      />
                      ))}
                  </div>
                  : <div className='flex mt-20 font-5xl'>관련 게시글이 없습니다.</div>
          )}
      </>
    );
};

export default BoardList;