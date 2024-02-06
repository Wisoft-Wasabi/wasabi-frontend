const nodemailer = require('nodemailer');
console.log('실행')
module.exports = async (email) => {
    const transporter = await nodemailer.createTransport({ // 메일 보내는 객체
        service: 'gmail',
        host: 'smtp.gmail.com', // smtp : 네트워크를 통해 이메일을 전송하는 기술 표준
        port: 587,
        secure: false,
        auth: {
            user: process.env.REACT_APP_GMAIL_ADDRESS,
            pass: process.env.REACT_APP_GMAIL_PASSWORD,
        }
    });

    try {
        const info = await transporter.sendMail({
            from: `${process.env.REACT_APP_GMAIL_ADDRESS}`, // 보내는 곳
            to: `${email}`, // 받는 곳
            subject: '[Wasabi] 이메일 인증을 진행해 주세요.', // 메일 제목
            html:
                `안녕하세요. Wasabi를 이용해주셔서 감사합니다. <br />
                가입을 위해 아래 인증번호를 회원가입 화면으로 돌아가 입력해 주세요. <br />`
        });
        console.log(info);
        return "Success"
    } catch (error) {
        console.log(error);
    }
};