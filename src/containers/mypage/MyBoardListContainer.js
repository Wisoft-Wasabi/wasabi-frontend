import MyBoardList from "../../components/mypage/MyBoardList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {myBoardList} from "../../modules/mypage";

const MyBoardListContainer = () => {
    const dispatch = useDispatch();
    const {my, myError, loading} = useSelector(({myPage, loading}) => ({
        my: myPage.my,
        myError: myPage.myError,
        loading: loading['myPage/MY_BOARD_LIST'],
    }));

    useEffect(() => {
        dispatch(myBoardList());
    }, [dispatch]);

    return (
        <MyBoardList myBoardList={my}
                     myBoardListError={myError}
                     loading={loading}
        />
    );
};

export default MyBoardListContainer;