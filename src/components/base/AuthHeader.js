import {Link} from "react-router-dom";
import styled from "styled-components";

const AuthHeaderBlock = styled.div`
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
`;

const AuthHeader = () => {
    return (
        <AuthHeaderBlock>
            <Link className='logo' to='/'>Wasabi</Link>
        </AuthHeaderBlock>
    );
};

export default AuthHeader;