import styled from "styled-components";
import Button from "../common/Button";
import {HiMiniCheckBadge} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";

const SignUpModalBlock = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(191,187,187,0.75);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;

const SignUpModalView = styled.div`
  width: 600px;
  height: 300px;
  border: none;
  border-radius: 11px;
  box-shadow: -3px 6px 11px 4px rgba(191,187,187,0.75);
  -webkit-box-shadow: -3px 6px 11px 4px rgba(191,187,187,0.75);
  -moz-box-shadow: -3px 6px 11px 4px rgba(191,187,187,0.75);
  background-color: #DAF9D9;
  text-align: center;
  padding-top: 1rem;
`;

const SignUpModal = () => {
    const navigate = useNavigate();

    return (
        <SignUpModalBlock>
            <SignUpModalView>
                <HiMiniCheckBadge style={{color: '#4BC75F', fontSize: '80px'}}/>
                <p style={{color: '#4BC75F', fontSize: '30px', fontWeight: 'bold', marginTop: '4px'}}>회원가입 요청 성공!</p>
                <p style={{fontSize: '22px'}}>관리자가 사용자 정보를 검토 후 <br/>요청을 승인하는 데까지 2~3일 소요됩니다.</p>
                <Button onClick={() => navigate('/')} style={{width: '20%', height: '40px'}}>확인</Button>
            </SignUpModalView>
        </SignUpModalBlock>
    );
};

export default SignUpModal;