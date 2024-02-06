import AuthForm from "../../components/auth/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, changeFieldEmailCode, initializeForm, signUp} from "../../modules/auth";
import {useEffect, useState} from "react";
import axios from "axios";
import {sendEmailCode} from "../../modules/email";

const SignUpForm = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useDispatch();
    const {form, email, emailCode} = useSelector(({auth}) => ({
        form: auth.signUp,
        email: auth.signUp.email,
        emailCode: auth.emailCode,
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

    const handleChangeEmailCode = e => {
        const {name, value} = e.target;

        dispatch(changeFieldEmailCode({
                name,
                value,
            }),
        );
    };

    const handleSendEmailCode = () => {
        dispatch(sendEmailCode({
                email,
            }),
        );
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
                  onChange={onChange}
                  onSubmit={onSubmit}
                  onSelectPart={onSelectPart}
                  isOpenModal={isOpenModal}
                  emailCode={emailCode}
                  handleChangeEmailCode={handleChangeEmailCode}
                  handleSendEmailCode={handleSendEmailCode}
        />
    );
};

export default SignUpForm;