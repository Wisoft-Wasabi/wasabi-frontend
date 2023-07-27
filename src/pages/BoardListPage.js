import SortBox from "../components/boards/SortBox";
import BoardListContainer from "../containers/boards/BoardListContainer";

const BoardListPage = () => {
    /*const options = [
        {
            name: "최신",
            value: "latest"
        },
        {
            name: "조회수",
            value: "views"
        },
        {
            name: "좋아요",
            value: "likes"
        }
    ];*/

    return (
        <div>
            {/*<SortBox options={options}/>*/}
            <SortBox/>
            <BoardListContainer/>
        </div>
    );
};

export default BoardListPage;