import AuthForm from "../../components/auth/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, signUp} from "../../modules/auth";
import {useEffect, useState} from "react";
import {changeAuthCode, verifyEmail} from "../../modules/mail";

const SignUpForm = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useDispatch();
    const {form, email, authCode, code, codeError} = useSelector(({auth, mail}) => ({
        form: auth.signUp,
        email: auth.signUp.email,
        authCode: mail.authCode,
        code: mail.code,
        codeError: mail.codeError
    }));

    const onChange = e => {
        const {name, value} = e.target;

        dispatch(
            changeField({
                form: 'signUp',
                key: name,
                value,
            }),
        );
    };

    const handleVerifyEmail = () => {
        dispatch(verifyEmail({
                email,
            }),
        );
    };

    const handleChangeAuthCode = e => {
        const {name, value} = e.target;

        dispatch(changeAuthCode({
                name,
                value,
            }),
        );
    };

    const handleCheckCode = () => {
        if (code && code.data.authCode) {
            if (code.data.authCode === authCode) {
                alert('인증되었습니다.');
            } else if (code.data.authCode !== authCode) {
                alert('다시 인증해주세요.');
            }
        }

        if (codeError) alert(codeError);
    };

    const onSelectPart = e => {
        dispatch(changeField({
                form: 'signUp',
                key: 'part',
                value: e.target.value,
            }),
        );
    };

    const onSubmit = () => {
        const {email, password, checkPassword, name, phoneNumber, referenceUrl, part, organization, motto} = form;
        dispatch(signUp({email, password, checkPassword, name, phoneNumber, referenceUrl, part, organization, motto}));
        setIsOpenModal(!isOpenModal);
    };

    useEffect(() => {
        dispatch(initializeForm('signUp'));
    }, [dispatch]);

    return (
        <AuthForm type="signUp"
                  form={form}
                  authCode={authCode}
                  onChange={onChange}
                  onSubmit={onSubmit}
                  onSelectPart={onSelectPart}
                  isOpenModal={isOpenModal}
                  handleVerifyEmail={handleVerifyEmail}
                  handleChangeAuthCode={handleChangeAuthCode}
                  handleCheckCode={handleCheckCode}
        />
    );
};

export default SignUpForm;