import BoardList from "../common/BoardList";
import styles from "./allBoardList.module.css";

const AllBoardList = ({boards, boardsError, boardsLoading, search, searchError, searchLoading, onSelectFilter, onNavigateDetail, boardsList}) => {
    if (boardsError) {
        return <div>게시글 목록 조회 에러 발생!</div>
    }

    if (searchError) {
        return <div>키워드 검색 조회 에러 발생!</div>
    }

    return (
        <div className={styles.allBoardListBox}>
            <select className={styles.select} onChange={e => onSelectFilter(e)}>
                <option value="">정렬 기준</option>
                <option key="latest" value="latest">최신순</option>
                <option key="likes" value="likes">좋아요순</option>
                <option key="views" value="views">조회수순</option>
            </select>
            { search ? <BoardList boards={search} loading={searchLoading} onNavigateDetail={onNavigateDetail}/> :
                <BoardList boards={boards} loading={boardsLoading} onNavigateDetail={onNavigateDetail} boardsList={boardsList}/>
            }
        </div>
    );
};

export default AllBoardList;