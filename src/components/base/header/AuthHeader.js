import {Link} from "react-router-dom";
import styles from "./header.module.css";
import {SiAppwrite} from "react-icons/si";

const AuthHeader = () => {
    return (
        <header className={styles.headerBox}>
            <Link className={styles.logo} to='/'>
                <SiAppwrite className={styles.logoIcon}/>
                Wasabi
            </Link>
        </header>
    );
};

export default AuthHeader;