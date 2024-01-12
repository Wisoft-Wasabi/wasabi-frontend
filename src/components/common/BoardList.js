import ThumbNail from "../../assets/thumbnail.jpg";
import {AiOutlineHeart} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {GrLineChart} from "react-icons/gr";
import {GoPencil} from "react-icons/go";

const BoardCard = ({board, onNavigateDetail}) => {
    const {title, writer, createdAt, likeCount, views} = board;
    const body = '내용이 들어갈 부분입니다. 60자가 넘어가면 뒷부분이\'...\'으로 표시가 되도록 만들었습니다. 너무 짧다면 늘릴 것이고 너무 길다면 줄일 것입니다. 이곳에 표시할 내용은 아직 받아오지 못하고 있으므로 보시는 것과 같은 임시 데이터가 들어가 있습니다.'

    return (
      <div className='flex flex-col w-80 h-96 border-none rounded-lg bg-white shadow-lg m-4 overflow-hidden hover:cursor-pointer hover:-translate-y-3 hover:transition-transform hover:ease-in-out duration-300' onClick={onNavigateDetail}>
          <img className='w-full h-44' src={ThumbNail} alt='ThumbNail'/>
          <div className='flex flex-col border px-5 py-5'>
          {title.length > 16 ? <h2 className='px-0 pb-3 text-xl font-medium text-text1'>{[...title].slice(0, 15)}...</h2> : <h2 className='m-0 mb-7 text-2xl font-medium text-text1'>{title}</h2> }
          {body.length > 80 ? <p className='text-xs text-text3'>{[...body].slice(0, 79)}...</p> : <p>{body}</p>}
            <div className='flex flex-row text-sm pt-3 text-text1'>
              <GoPencil className='h-5' />
              {writer.length > 18 ? <p className='px-1 font-medium'>{[...writer].slice(0, 17)}...</p> : <p>{writer}</p>}
            </div>
      </div>
          <div className='flex flex-row py-2 px-4 space-x-28'>
            <div className='flex flex-row'>
              <p className='flex flex-row items-center text-lg pl-2'>
                    <AiOutlineHeart/>
                    <p className='pl-2'>{likeCount}</p>
                </p>
              <p className='flex flex-row items-center text-lg pl-2'>
                    <GrLineChart/>
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
                      <div className='grid grid-cols-3 grid-rows-2 gap-12 mt-12'>
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