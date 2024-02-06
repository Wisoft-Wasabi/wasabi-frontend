const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
require("dotenv").config(); // dotenv 불러오기
const mailer = require('./mailer.js'); // mailer 모듈 불러오기

console.log('index 실행');

// 메일 전송 라우트
app.post('/email', (req, res) => {
    console.log('req: ' + JSON.stringify(req) + ', res: ' + JSON.stringify(res));

    mailer(req)
        .then((response) => {
            if (response === 'success') {
                res.status(200).json({
                    status: 'Success',
                    code: 200,
                    message: 'Message Sent Successfully!',
                })
            } else {
                res.json({
                    status: 'Fail',
                    code: response.code
                })
            }
        })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});