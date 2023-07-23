import axios from "axios";

const client = axios.create();

client.interceptors.request.use(
    (config) => {
        const member = JSON.parse(localStorage.getItem('member'));

        if (member !== null) {
            config.headers['Content-Type'] = 'application/json';
            config.headers['Authorization'] = `Bearer ${member.authInfo}`;
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

export default client;