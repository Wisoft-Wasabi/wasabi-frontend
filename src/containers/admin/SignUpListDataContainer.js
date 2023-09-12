import SignUpListData from "../../components/admin/SignUpListData";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {readSignUpList} from "../../modules/admin";

const SignUpListDataContainer = () => {
    const dispatch = useDispatch();
    const {signUpList, signUpListError, loading} = useSelector(({admin, loading}) => ({
        signUpList: admin.signUpList,
        signUpListError: admin.signUpListError,
        loading: loading['admin/READ_SIGNUP_LIST'],
    }));

    useEffect(() => {
        dispatch(readSignUpList());
    }, [dispatch]);

    return (
        <>
            {!loading && signUpList && (
                <SignUpListData signUpList={signUpList}
                                signUpListError={signUpListError}
                />
            )}
        </>

    );
};

export default SignUpListDataContainer;