import {Link} from "react-router-dom";
import styles from "./header.module.css";
import {SiAppwrite} from "react-icons/si";

const EtcHeader = () => {
    const member = JSON.parse(localStorage.getItem('member'));

    return (
        <header className={styles.headerBox}>
            <Link className={styles.logo} to='/'>
                <SiAppwrite className={styles.logoIcon}/>
                Wasabi
            </Link>
            <nav className={styles.nav}>
                <Link className={styles.link} to=''>
                    <span className={styles.member}>
                        {member.data.name}
                    </span>
                    님
                </Link>
            </nav>
        </header>
    );
};

export default EtcHeader;