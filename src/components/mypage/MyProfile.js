import styled from "styled-components";
import Button from "../common/Button";

const MyProfileBlock = styled.div`
  align-items: center; /* 수직 중앙 정렬 */
  display: flex; /* 내부 내용 중앙 정렬 */
  flex-direction: column; /* 플렉스 내의 아이템 배치 */
  margin-top: 200px;

  div {
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 10px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0.5px solid darkgrey;
  border-radius: 2.5px;
  font-size: 1rem;
  padding: 0.25rem 0 0.25rem 0.1rem;
`;

const MyProfile = ({myProfile, myProfileError, loading, onChange, onUpdateProfile}) => {
    if (myProfileError) {
        return <div>에러 발생</div>
    }

    if (loading || !myProfile) {
        return null;
    }

    const {email, name, phoneNumber, referenceUrl, part, organization, motto, role} = myProfile;

    return (
        <MyProfileBlock>
            {myProfile && (
                <>
                    <h2>내 프로필</h2>
                    <form>
                        <div>
                            <h3>이메일</h3>
                            <StyledInput name="email"
                                         placeholder="이메일"
                                         value={email}
                                         disabled
                            />
                        </div>
                        <div>
                            <h3>이름</h3>
                            <StyledInput name="name"
                                         placeholder="이름"
                                         value={name}
                                         onChange={onChange}
                            />
                        </div>
                        <div>
                            <h3>전화번호</h3>
                            <StyledInput name="phoneNumber"
                                         placeholder="010 - XXXX - XXXX"
                                         value={phoneNumber}
                                         onChange={onChange}
                            />
                        </div>
                        <div>
                            <h3>URL</h3>
                            <StyledInput name="referenceUrl"
                                         placeholder="URL"
                                         value={referenceUrl}
                                         onChange={onChange}
                            />
                        </div>
                        <div>
                            <h3>직군</h3>
                            <StyledInput name="part"
                                         placeholder="직군"
                                         value={part}
                                         onChange={onChange}
                            />
                        </div>
                        <div>
                            <h3>소속</h3>
                            <StyledInput name="organization"
                                         placeholder="소속"
                                         value={organization}
                                         onChange={onChange}
                            />
                        </div>
                        <div>
                            <h3>한 줄 소개</h3>
                            <StyledInput name="motto"
                                         placeholder="한 줄 소개"
                                         value={motto}
                                         onChange={onChange}
                            />
                        </div>
                        <div>
                            <h3>권한</h3>
                            <StyledInput name="role"
                                         placeholder="권한"
                                         value={role}
                                         disabled
                            />
                        </div>
                        <Button fullwidth="true"
                                onClick={onUpdateProfile}>수정하기</Button>
                    </form>
                </>
            )}
        </MyProfileBlock>
    );
};

export default MyProfile;