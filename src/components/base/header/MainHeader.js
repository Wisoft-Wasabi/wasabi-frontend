import Search from "../../search/Search";
import {Link} from "react-router-dom";
import {SiAppwrite} from "react-icons/si";
import styles from "./header.module.css";

const MainHeader = ({keyword, search, searchError, searchLoading, onChangeKeyword, onSearchKeyword, onNavigateDetail}) => {
    const member = JSON.parse(localStorage.getItem('member'));

    return (
        <header className={styles.headerBox}>
            <Link className={styles.logo} to='/'>
                <SiAppwrite className={styles.logoIcon}/>
                Wasabi
            </Link>
            <Search keyword={keyword}
                    search={search}
                    searchError={searchError}
                    searchLoading={searchLoading}
                    onChangeKeyword={onChangeKeyword}
                    onSearchKeyword={onSearchKeyword}
                    onNavigateDetail={onNavigateDetail}
            />
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

export default MainHeader;