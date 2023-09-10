import MyProfile from "../../components/mypage/MyProfile";
import {useDispatch, useSelector} from "react-redux";
import {changeField, myProfile, myProfileUpdate} from "../../modules/mypage";
import {useEffect} from "react";

const MyProfileContainer = () => {
    const dispatch = useDispatch();
    const {profile, myError, loading} = useSelector(({myPage, loading}) => ({
        profile: myPage.profile,
        myError: myPage.myError,
        loading: loading['myPage/MY_PROFILE'],
    }));

    useEffect(() => {
        dispatch(myProfile());
    }, [dispatch]);

    const onChange = e => {
        const {name, value} = e.target;

        dispatch(
            changeField({
                profile: "profile",
                key: name,
                value,
            }),
        );
    };

    const onUpdateProfile = e => {
        e.preventDefault();

        const {name, phoneNumber, referenceUrl, part, organization, motto} = profile;
        dispatch(myProfileUpdate({name, phoneNumber, referenceUrl, part, organization, motto}));
    };

    return (
        <MyProfile myProfile={profile}
                   myProfileError={myError}
                   loading={loading}
                   onChange={onChange}
                   onUpdateProfile={onUpdateProfile}
        />
    );
};

export default MyProfileContainer;