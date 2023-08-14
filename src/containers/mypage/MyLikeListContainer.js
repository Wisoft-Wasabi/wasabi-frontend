import MyLikeList from "../../components/mypage/MyLikeList";
import {useDispatch, useSelector} from "react-redux";
import {myLikeList} from "../../modules/mypage";
import {useEffect} from "react";

const MyLikeListContainer = () => {
    const dispatch = useDispatch();
    const {my, myError, loading} = useSelector(({myPage, loading}) => ({
        my: myPage.my,
        myError: myPage.myError,
        loading: loading['myPage/MY_LIKE_LIST'],
    }));

    useEffect(() => {
        dispatch(myLikeList());
    }, [dispatch]);

    return (
        <MyLikeList myLikeList={my}
                    myLikeListError={myError}
                    loading={loading}
        />
    );
};

export default MyLikeListContainer;
