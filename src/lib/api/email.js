import client from "./client";

export const sendEmailConfirm = ({email}) => client.post('/email', ({email}));