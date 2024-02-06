import client from "./client";

export const sendEmailCode = ({email}) => client.post('/email', ({email}));