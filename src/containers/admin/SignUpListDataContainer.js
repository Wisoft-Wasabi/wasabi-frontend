import SignUpListData from "../../components/admin/SignUpListData";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {acceptSignUpRequest, readSignUpList} from "../../modules/admin";

const SignUpListDataContainer = () => {
    const dispatch = useDispatch();
    const {signUpList, signUpListError, loading, acceptLoading} = useSelector(({admin, loading}) => ({
        signUpList: admin.signUpList,
        signUpListError: admin.signUpListError,
        loading: loading['admin/READ_SIGNUP_LIST'],
        acceptLoading: loading['admin/ACCEPT_SIGNUP_REQUEST'],
    }));

    useEffect(() => {
        dispatch(readSignUpList());
    }, [dispatch]);

    const onAccept = (id) => {
        const memberId = id;
        dispatch(acceptSignUpRequest({memberId}));
    };

    return (
        <>
            {!loading && signUpList && (
                <SignUpListData signUpList={signUpList}
                                signUpListError={signUpListError}
                                onAccept={onAccept}
                                acceptLoading={acceptLoading}
                />
            )}
        </>

    );
};

export default SignUpListDataContainer;