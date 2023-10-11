import client from "./client";

export const readSignUpList = () => client.get('/admin/members');

export const acceptSignUpRequest = ({memberId}) => client.patch('/admin/members', ({memberId}));