import {Link} from "react-router-dom";
import styles from "./header.module.css";
import {SiAppwrite} from "react-icons/si";

const SubHeader = () => {
    const member  = JSON.parse(localStorage.getItem('member'));
    // const member = useAuthContext(); // Context에서 사용자 정보 가져와 사용하기

    return (
        <header className={styles.headerBox}>
            <Link className={styles.logo} to='/'>
                <SiAppwrite className={styles.logoIcon}/>
                Wasabi
            </Link>
            <nav className={styles.nav}>
                {member && member.data ?
                    <>
                        <Link className={styles.link} to='/write'>글쓰기</Link>
                        <Link className={styles.link} to=''>
                            <span className={styles.member}>
                                {member.data.name}
                            </span>
                            님
                        </Link>
                    </>
                    : <>
                        <Link className={styles.link} to='/auth/login'>로그인</Link>
                        <span>|</span>
                        <Link className={styles.link} to='/auth/signup'>회원가입</Link>
                    </>
                }
            </nav>
        </header>
    );
};

export default SubHeader;