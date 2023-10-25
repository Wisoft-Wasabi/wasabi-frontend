import styled from "styled-components";
import Search from "../search/Search";
import {Link} from "react-router-dom";

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

  .nav{
    padding-right: 80px;
    color: #000;
    font-size: 22px;
    font-weight: bold;
  }
`;

const MainHeader = ({keyword, search, searchError, searchLoading, onChangeKeyword, onSearchKeyword, onNavigateDetail}) => {
    const member = JSON.parse(localStorage.getItem('member'));

    return (
        <HeaderBlock>
            <Link className='logo' to='/'>Wasabi</Link>
            <Search keyword={keyword}
                    search={search}
                    searchError={searchError}
                    searchLoading={searchLoading}
                    onChangeKeyword={onChangeKeyword}
                    onSearchKeyword={onSearchKeyword}
                    onNavigateDetail={onNavigateDetail}
            />
            {member && member.data ?
                <><Link className='nav' to='/write'>글쓰기</Link><Link className='nav' to=''><span style={{color: '#4BC75F'}}>{member.data.name}</span>님</Link></>
                : <Link className='nav' to='/auth/login'>로그인</Link>}
        </HeaderBlock>
    );
};

export default MainHeader;