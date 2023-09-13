import client from "./client";

export const readSignUpList = () => client.get('/api/admin/members');

export const acceptSignUpRequest = ({memberId}) => client.patch('/api/admin/members', ({memberId}));