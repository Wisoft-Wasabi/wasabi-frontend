import MyProfile from "../../components/mypage/MyProfile";
import {useDispatch, useSelector} from "react-redux";
import {myProfile} from "../../modules/mypage";

const MyProfileContainer = () => {
    const dispatch = useDispatch();
    const {my, myError} = useSelector(({myPage}) => ({
        my: myPage.my,
        myError: myPage.myError,
    }));

    // useEffect(() => {
    //     dispatch(myProfile());
    // }, [dispatch]);

    const onViewProfile = () => {
        dispatch(myProfile());
    };

    return (
        <MyProfile myProfile={my}
                   myProfileError={myError}
                   onViewProfile={onViewProfile}
        />
    );
};

export default MyProfileContainer;