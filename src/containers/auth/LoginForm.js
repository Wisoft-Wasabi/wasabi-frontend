import AuthForm from "../../components/auth/AuthForm";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initializeForm, login} from "../../modules/auth";
import {useEffect} from "react";
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

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    }

    const onSubmit = () => {
        const {email, password} = form;

        dispatch(login({email, password}));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if (auth && auth.data.activation) {
            navigate('/');
        }

        if (auth && !auth.data.activation) {
            navigate('/error/activation');
        }

        if (authError) {
            alert('Fail Login.');
            dispatch(initializeForm('login'));
        }
    }, [auth, authError]);

    return (
      <AuthForm type="login"
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
                onKeyPress={onKeyPress}
      />
    );
};

export default LoginForm;