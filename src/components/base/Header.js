import styled from "styled-components";
import Search from "../search/Search";
import {Link, useLocation} from "react-router-dom";

const HeaderBlock = styled.div`
  width: 1440px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Tilt Neon', sans-serif;

  .logo {
    padding-left: 80px;
    font-size: 34px;
    font-weight: bolder;
    color: #000;
  }

  .login {
    padding-right: 80px;
    color: #000;
    font-size: 22px;
    font-weight: bold;
  }
`;

const Header = ({keyword, search, searchError, searchLoading, onChangeKeyword, onSearchKeyword, onNavigateDetail}) => {
    const {pathname} = useLocation();

    return (
        <HeaderBlock>
            <Link className='logo' to='/'>Wasabi</Link>
            {pathname === '/auth/login' ? null : (
                <>
                    <Search keyword={keyword}
                            search={search}
                            searchError={searchError}
                            searchLoading={searchLoading}
                            onChangeKeyword={onChangeKeyword}
                            onSearchKeyword={onSearchKeyword}
                            onNavigateDetail={onNavigateDetail}
                    />
                    <Link className='login' to='/auth/login'>로그인</Link>
                </>
            )}
        </HeaderBlock>
    );
};

export default Header;