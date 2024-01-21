import AuthForm from "../../components/auth/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, changeFieldEmailConfirm, initializeForm, signUp} from "../../modules/auth";
import {useEffect, useState} from "react";
import {sendEmailConfirm} from "../../modules/email";

const SignUpForm = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const dispatch = useDispatch();
    const {form, email, emailConfirm} = useSelector(({auth}) => ({
        form: auth.signUp,
        email: auth.signUp.email,
        emailConfirm: auth.emailConfirm,
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

    const handleChangeEmailConfirm = e => {
        const {name, value} = e.target;

        dispatch(changeFieldEmailConfirm({
                name,
                value,
            }),
        );
    };

    const handleSendEmailConfirm = () => {
        dispatch(sendEmailConfirm({
                email
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
                  emailConfirm={emailConfirm}
                  handleChangeEmailConfirm={handleChangeEmailConfirm}
                  handleSendEmailConfirm={handleSendEmailConfirm}
        />
    );
};

export default SignUpForm;