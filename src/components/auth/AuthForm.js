import Button from "../common/Button";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useRef} from "react";
import SignUpModal from "./SignUpModal";

const AuthFormBlock = styled.div`
    align-items: center; /* 수직 중앙 정렬 */
    display: flex; /* 내부 내용 중앙 정렬 */
    flex-direction: column; /* 플렉스 내의 아이템 배치 */
    margin-top: 200px;

    div {
        margin-bottom: 4rem;
    }

    h3 {
        margin-bottom: 10px;
    }
`;

const StyledInput = styled.input`
    width: 350px;
    height: 35px;
    border: 0.5px solid darkgrey;
    border-radius: 2.5px;
    font-size: 1.215rem;
    padding: 0.25rem 0 0.25rem 0.1rem;
`;

const StyledSelect = styled.select`
    width: 100%;
    height: 44.33px;
    border: 0.5px solid darkgrey;
    border-radius: 2.5px;
    font-size: 1.215rem;
    padding: 0.25rem 0 0.25rem 0.1rem;
`;

const StyledOption = styled.option`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid darkgrey;
    border-radius: 2.5px;
    font-size: 1.215rem;
    padding: 0.25rem 0 0.25rem 0.1rem;
    background-color: ${(props) => (props.selected ? '#4BC75F' : '#FFF')};
`;

const ErrorText = styled.p`
    color: #EF616B;
    margin-top: 0.2rem;
`;

const Footer = styled.div`
    margin-top: 30px;
    text-align: center;
    font-size: 0.7rem;
`;

const textMap = {  // 객체
    login: '로그인', // 프로퍼티
    signUp: '회원가입',
};

const partMap = [
    {
        name: '직군 선택',
        value: 'DEVELOPER',
    },
    {
        name: 'BackEnd',
        value: 'BACKEND'
    },
    {
        name: 'FrontEnd',
        value: 'FRONTEND'
    },
    {
        name: 'Mobile',
        value: 'MOBILE'
    },
    {
        name: 'Infra',
        value: 'INFRA'
    },
    {
        name: 'DBA',
        value: 'DBA'
    },
    {
        name: 'Developer',
        value: 'DEVELOPER'
    },
];

const AuthForm = ({type, form, onChange, onSubmit, onKeyPress, onSelectPart, isOpenModal}) => {
    const text = textMap[type];
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const passwordRef = useRef(null);
    passwordRef.current = watch('password');

    return (
      <AuthFormBlock>
          <h2>{text}</h2>
          {isOpenModal && <SignUpModal/>}
          <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <h3>이메일</h3>
                  <StyledInput {...register("email",
                    {
                        required: '필수 입력 항목입니다.',
                        pattern: {
                            value: /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                            message: '이메일 형식이 올바르지 않습니다.'
                        }
                    })}
                               placeholder="이메일"
                               value={form.email}
                               onChange={onChange}
                  />
                  <ErrorText>{errors.email?.message}</ErrorText>
              </div>
              <div>
                  <h3>비밀번호</h3>
                  {type === 'signUp' ?
                    <p style={{color: '#72757A', fontSize: '1rem', margin: '0.5rem 0'}}>영문, 숫자를 포함한 6자 이상의 비밀번호를
                        입력하세요.</p> : null}
                  <StyledInput {...register("password",
                    {
                        required: '필수 입력 항목입니다.',
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                            message: '비밀번호는 영문, 숫자를 포함하여 6자 이이어야 합니다.'
                        }
                    })}
                               placeholder="비밀번호"
                               type="password"
                               value={form.password}
                               onChange={onChange}
                               onKeyUp={onKeyPress}
                  />
                  <ErrorText>{errors.password?.message}</ErrorText>
              </div>
              {type === 'signUp' && (
                <>
                    <div>
                        <h3>비밀번호 확인</h3>
                        <StyledInput {...register("checkPassword",
                          {
                              required: '필수 입력 항목입니다.',
                              validate: (value) => {
                                  if (value === passwordRef.current) {
                                      return null;
                                  } else {
                                      return '비밀번호가 일치하지 않습니다.';
                                  }
                              }
                          })}
                                     placeholder="비밀번호 확인"
                                     type="password"
                                     value={form.checkPassword}
                                     onChange={onChange}
                        />
                        <ErrorText>{errors.checkPassword?.message}</ErrorText>
                    </div>
                    <div>
                        <h3>이름</h3>
                        <StyledInput {...register("name", {required: '필수 입력 항목입니다.'})}
                                     placeholder="이름"
                                     value={form.name}
                                     onChange={onChange}
                        />
                        <ErrorText>{errors.name?.message}</ErrorText>
                    </div>
                    <div>
                        <h3>전화번호</h3>
                        <p style={{color: '#72757A', fontSize: '1rem', margin: '0.5rem 0'}}>'-'를 포함하여 입력하세요.</p>
                        <StyledInput {...register("phoneNumber",
                          {
                              required: '필수 입력 항목입니다.',
                              pattern: {
                                  value: /^\d{3}-\d{3,4}-\d{4}$/,
                                  message: '핸드폰 번호 형식이 올바르지 않습니다.'
                              }
                          })}
                                     placeholder="010-1234-5678"
                                     value={form.phoneNumber}
                                     onChange={onChange}
                        />
                        <ErrorText>{errors.phoneNumber?.message}</ErrorText>
                    </div>
                    <div>
                        <h3>URL</h3>
                        <StyledInput {...register("referenceUrl")}
                                     placeholder="URL"
                                     value={form.referenceUrl}
                                     onChange={onChange}
                        />
                    </div>
                    <div>
                        <h3>직군</h3>
                        <StyledSelect onChange={e => onSelectPart(e)}>
                            {partMap.map(part => (
                              <StyledOption name='part'
                                            key={part.index}
                                            value={part.value}
                                            disabled={part.disabled}>
                                  {part.name}
                              </StyledOption>
                            ))}
                        </StyledSelect>
                    </div>
                    <div>
                        <h3>소속</h3>
                        <StyledInput name="organization"
                                     placeholder="소속"
                                     value={form.organization}
                                     onChange={onChange}
                        />
                    </div>
                    <div>
                        <h3>한 줄 소개</h3>
                        <StyledInput name="motto"
                                     placeholder="한 줄 소개"
                                     value={form.motto}
                                     onChange={onChange}
                        />
                    </div>
                </>
              )}
              <Button fullwidth="true" style={{height: "40px"}} >{text}</Button>
          </form>
          <Footer>
              {type === 'login' ? (
                <p>회원이 아니신가요? <Link to="/auth/signup" style={{color: " #4BC75F"}}>회원가입</Link>하러 가기</p>
              ) : (
                <p>이미 회원이신가요? <Link to="/auth/login" style={{color: " #4BC75F"}}>로그인</Link>하러 가기</p>
              )}
          </Footer>
      </AuthFormBlock>
    );
};

export default AuthForm;