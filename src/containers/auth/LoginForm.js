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

    /*
    async function afterLogin() {
        await new Promise((resolve) => {
            if(loading === false) {
                resolve();
            }
        });

        if (auth) {
            navigate('/');
        } else if(authError) {
            alert('로그인 실패');
        }
    }
    */

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onSubmit(); // Enter 입력이 되면 Submit 실행
        }
    }

    const onSubmit = () => {
        const {email, password} = form;
        dispatch(login({email, password}));
        navigate('/');
        // afterLogin().then();
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

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