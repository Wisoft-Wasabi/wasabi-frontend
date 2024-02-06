import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useRef, useState} from "react";
import SignUpModal from "./SignUpModal";

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

const AuthForm = ({type, form, onChange, onSubmit, onKeyPress, onSelectPart, isOpenModal, emailConfirm, handleChangeEmailConfirm, handleSendEmailConfirm}) => {
    const [isClicked, setIsClicked] = useState(false);
    const text = textMap[type];
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const passwordRef = useRef(null);
    passwordRef.current = watch('password');

    return (
        <div className='flex flex-col items-center'>
            <p className='text-2xl text-text1 font-bold mb-10'>{text}</p>
            {isOpenModal && <SignUpModal/>}
            <form className='w-3/12 text-lg text-text2 mb-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col mb-10'>
                    <p className='font-semibold mb-1.5'>이메일</p>
                    <input {...register("email",
                        {
                            required: '필수 입력 항목입니다.',
                            pattern: {
                                value: /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                                message: '이메일 형식이 올바르지 않습니다.'
                            }
                        })}
                           className='w-full px-2 py-1 mb-1.5 border border-border2 rounded-md focus:outline-none focus:border-brand'
                           placeholder="이메일"
                           value={form.email}
                           onChange={onChange}
                    />
                    <p className='text-sm text-rose-500 mb-1.5'>{errors.email?.message}</p>
                    {type === 'signUp' ?
                        <button className='w-full py-3 text-text4 font-semibold rounded-md bg-gray-100 hover:bg-gray-200'
                                type='button'
                                onClick={() => { handleSendEmailConfirm(); setIsClicked(!isClicked);}}
                        >
                            이메일 인증하기
                        </button>
                        : null
                    }
                </div>
                {isClicked ?
                    <div className='flex flex-col px-2 py-8 mb-10 text-base bg-gray-100'>
                        <p className='mb-1.5'>이메일로 전송된 인증코드를 입력해 주세요.</p>
                        <div className='px-2 py-1 border border-gray-200 bg-background2'>
                            <input className='border-none focus:outline-none'
                                   placeholder='인증코드'
                                   name='emailConfirm'
                                   value={emailConfirm}
                                   onChange={handleChangeEmailConfirm}
                            />
                            <button className='w-fit float-right px-3 text-white font-semibold rounded-sm bg-brand hover:bg-brandAccent'
                                    type='button'
                            >
                                확인
                            </button>
                        </div>
                    </div>
                    : null
                }
                <div className='flex flex-col mb-10'>
                    <p className='font-semibold mb-1.5'>비밀번호</p>
                    {type === 'signUp' ?
                        <p className='text-sm text-text3 mb-1.5'>영문, 숫자를 포함한 6자 이상의 비밀번호를 입력하세요.</p>
                        : null
                    }
                    <input {...register("password",
                        {
                            required: '필수 입력 항목입니다.',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
                                message: '비밀번호는 영문, 숫자를 포함하여 6자 이이어야 합니다.'
                            }
                        })}
                           className='w-full px-2 py-1 mb-1.5 border border-border2 rounded-md focus:outline-none focus:border-brand'
                           placeholder="비밀번호"
                           type="password"
                           value={form.password}
                           onChange={onChange}
                           onKeyUp={onKeyPress}
                    />
                    <p className='text-sm text-rose-500 mb-1.5'>{errors.password?.message}</p>
                </div>
                {type === 'signUp' && (
                    <>
                        <div className='flex flex-col mb-10'>
                            <p className='font-semibold mb-1.5'>비밀번호 확인</p>
                            <input {...register("checkPassword",
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
                                   className='w-full px-2 py-1 mb-1.5 border border-border2 rounded-md focus:outline-none focus:border-brand'
                                   placeholder="비밀번호 확인"
                                   type="password"
                                   value={form.checkPassword}
                                   onChange={onChange}
                            />
                            <p className='text-sm text-rose-500 mb-1.5'>{errors.checkPassword?.message}</p>
                        </div>
                        <div className='flex flex-col mb-10'>
                            <p className='font-semibold mb-1.5'>이름</p>
                            <input {...register("name", {required: '필수 입력 항목입니다.'})}
                                   className='w-full px-2 py-1 mb-1.5 border border-border2 rounded-md focus:outline-none focus:border-brand'
                                   placeholder="이름"
                                   value={form.name}
                                   onChange={onChange}
                            />
                            <p className='text-sm text-rose-500 mb-1.5'>{errors.name?.message}</p>
                        </div>
                        <div className='flex flex-col mb-10'>
                            <p className='font-semibold mb-1.5'>전화번호</p>
                            <p className='text-sm text-text3 mb-1.5'>'-'를 포함하여 입력하세요.</p>
                            <input {...register("phoneNumber",
                                {
                                    required: '필수 입력 항목입니다.',
                                    pattern: {
                                        value: /^\d{3}-\d{3,4}-\d{4}$/,
                                        message: '핸드폰 번호 형식이 올바르지 않습니다.'
                                    }
                                })}
                                   className='w-full px-2 py-1 mb-1.5 border border-border2 rounded-md focus:outline-none focus:border-brand'
                                   placeholder="010-1234-5678"
                                   value={form.phoneNumber}
                                   onChange={onChange}
                            />
                            <p className='text-sm text-rose-500 mb-1.5'>{errors.phoneNumber?.message}</p>
                        </div>
                        <div className='flex flex-col mb-10'>
                            <p className='font-semibold mb-1.5'>URL</p>
                            <input {...register("referenceUrl")}
                                   className='w-full px-2 py-1 mb-1.5 border border-border2 rounded-md focus:outline-none focus:border-brand'
                                   placeholder="URL"
                                   value={form.referenceUrl}
                                   onChange={onChange}
                            />
                        </div>
                        <div className='flex flex-col mb-10'>
                            <p className='font-semibold mb-1.5'>직군</p>
                            <select className='w-full h-[38px] px-2 py-1 mb-1.5 border border-border2 rounded-md focus:outline-none focus:border-brand'
                                    onChange={e => onSelectPart(e)}
                            >
                                {partMap.map(part => (
                                    <option className='w-full'
                                            name='part'
                                            key={part.index}
                                            value={part.value}
                                            disabled={part.disabled}>
                                        {part.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col mb-10'>
                            <p className='font-semibold mb-1.5'>소속</p>
                            <input className='w-full px-2 py-1 mb-1.5 border border-border2 rounded-md focus:outline-none focus:border-brand'
                                   placeholder="소속"
                                   name="organization"
                                   value={form.organization}
                                   onChange={onChange}
                            />
                        </div>
                        <div className='flex flex-col mb-10'>
                            <p className='font-semibold mb-1.5'>한 줄 소개</p>
                            <input className='w-full px-2 py-1 mb-1.5 border border-border2 rounded-md focus:outline-none focus:border-brand'
                                   placeholder="한 줄 소개"
                                   name="motto"
                                   value={form.motto}
                                   onChange={onChange}
                            />
                        </div>
                    </>
                )}
                <button className='w-full py-2 text-lg text-white font-bold rounded-md bg-brand hover:bg-brandAccent'
                        type='submit'
                >
                    {text}
                </button>
            </form>
            <div className='text-base mb-10'>
                {type === 'login' ?
                    <p>회원이 아니신가요? <Link className='text-brand' to="/auth/signup">회원가입</Link>하러 가기</p>
                    : <p>이미 회원이신가요? <Link className='text-brand' to="/auth/login">로그인</Link>하러 가기</p>
                }
            </div>
        </div>
    );
};

export default AuthForm;