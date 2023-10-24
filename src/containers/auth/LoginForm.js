import AuthForm from "../../components/auth/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, login} from "../../modules/auth";
import {useEffect} from "react";
import client from "../../lib/api/client";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {form, auth, authError} = useSelector(({auth}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
    }));

    const onChange = e => {
        const {name, value} = e.target;

        dispatch(
            changeField({
                form: 'login',
                key: name,
                value,
            })
        );
    };

    const onSubmit = () => {
        const {email, password} = form;
        dispatch(login({email, password}));
        dispatch(initializeForm('login'));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (auth) {
            try {
                localStorage.setItem('member', JSON.stringify(auth));
                client.defaults.headers.common['Authorization'] = `Bearer ${auth}`;
                navigate('/');
            } catch (e) {
                console.log('localStorage is not working.');
            }
        }
        if (authError) {
            alert('로그인 실패!');
        }
    }, [auth, authError, navigate]);

    return (
        <AuthForm type="login"
                  form={form}
                  onChange={onChange}
                  onSubmit={onSubmit}
        />
    );
};

export default LoginForm;