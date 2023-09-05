import MyProfile from "../../components/mypage/MyProfile";
import {useDispatch, useSelector} from "react-redux";
import {myProfile} from "../../modules/mypage";
import {useEffect} from "react";

const MyProfileContainer = () => {
    const dispatch = useDispatch();
    const {my, myError, loading} = useSelector(({myPage, loading}) => ({
        my: myPage.my,
        myError: myPage.myError,
        loading: loading['myPage/MY_PROFILE'],
    }));

    useEffect(() => {
        dispatch(myProfile());
    }, [dispatch]);

    return (
        <MyProfile myProfile={my}
                   myProfileError={myError}
                   loading={loading}
        />
    );
};

export default MyProfileContainer;