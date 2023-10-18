import AuthForm from "../../components/auth/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, signUp} from "../../modules/auth";
import {useEffect} from "react";

const SignUpForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth}) => ({
        form: auth.signUp,
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
        />
    );
};

export default SignUpForm;