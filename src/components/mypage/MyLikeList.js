import BoardList from "../common/BoardList";

const MyLikeList = ({myLikeList, myLikeListError, loading}) => {
    if (myLikeListError) {
        return <div>에러 발생!</div>
    }

    return (
        <BoardList boards={myLikeList} loading={loading}/>
    );
};

export default MyLikeList;