import ThumbNail from "../../assets/thumbnail.jpg";
import {IoPersonCircleSharp} from "react-icons/io5";
import {AiOutlineHeart} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import styles from "./boardList.module.css";
import {GrLineChart} from "react-icons/gr";
import InfiniteScroll from "react-infinite-scroll-component";

const BoardCard = ({board, onNavigateDetail}) => {
    const {title, writer, createdAt, likeCount, views} = board;

    return (
        <div className={styles.boardCardBox} onClick={onNavigateDetail}>
            <img className={styles.thumbnail} src={ThumbNail} alt='ThumbNail'/>
            <div className={styles.subInfo}>
                <div className={styles.writerBox}>
                    <IoPersonCircleSharp/>
                    <p className={styles.writer}>{writer}</p>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.date}>{new Date(createdAt).toLocaleString()}</p>
            </div>
            <div className={styles.countBox}>
                <span className={styles.countInfo}>
                    <AiOutlineHeart/>
                    <p className={styles.count}>{likeCount}</p>
                </span>
                <span className={styles.countInfo}>
                    <GrLineChart/>
                    <p className={styles.count}>{views}</p>
                </span>
            </div>
        </div>
    );
};

const BoardList = ({boards, loading, handlePage}) => {
    const navigate = useNavigate();

    const onNavigateDetail = (boardId) => {
        navigate(`/boards/${boardId}`);
    };

    return (
        <>
            {!loading && boards && (
                <>
                    <InfiniteScroll dataLength={6}
                                    next={handlePage}
                                    hasMore={true}
                    >
                        {boards.data.content.length !== 0 ?
                            <div className={styles.boardListBox}>
                                {boards.data.content.map(board => (
                                    <BoardCard board={board}
                                               key={board.id}
                                               onNavigateDetail={() => onNavigateDetail(board.id)}
                                    />
                                ))}
                            </div>
                            : <div className={styles.error}>관련 게시글이 없습니다.</div>
                        }
                    </InfiniteScroll>
                </>
            )}
        </>
    );
};

export default BoardList;