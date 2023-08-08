import MyBoardList from "../../components/mypage/MyBoardList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {myBoardList} from "../../modules/mypage";
import {useNavigate} from "react-router-dom";

const MyBoardListContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {my, myError, loading} = useSelector(({myPage, loading}) => ({
        my: myPage.my,
        myError: myPage.myError,
        loading: loading['myPage/MY_BOARD_LIST'],
    }));

    useEffect(() => {
        dispatch(myBoardList());
    }, [dispatch]);

    const onNavigateDetail = (boardId) => {
        navigate(`${boardId}`);
    };

    return (
        <MyBoardList myBoardList={my}
                     myBoardListError={myError}
                     loading={loading}
                     onNavigateDetail={onNavigateDetail}
        />
    );
};

export default MyBoardListContainer;