import {Link} from "react-router-dom";
import styles from "./header.module.css";
import {SiAppwrite} from "react-icons/si";

const EtcHeader = () => {
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
                    <Link className={styles.link} to=''>
                    <span className={styles.member}>
                        {member.data.name}
                    </span>
                        님
                    </Link>
                    : null
                }
            </nav>
        </header>
    );
};

export default EtcHeader;