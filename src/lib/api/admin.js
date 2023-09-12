import client from "./client";

export const readSignUpList = () => client.get('/api/admin/members');