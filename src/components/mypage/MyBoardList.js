import BoardList from "../common/BoardList";

const MyBoardList = ({myBoardList, myBoardListError, loading}) => {
    if (myBoardListError) {
        return <div>에러 발생!</div>
    }

    return (
        <BoardList boards={myBoardList} loading={loading}/>
    );
};

export default MyBoardList;