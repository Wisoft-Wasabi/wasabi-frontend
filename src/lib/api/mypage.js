import client from "./client";

export const myBoardList = () => client.get('/api/boards/my-board');

export const myLikeList = () => client.get('/api/boards/my-like');

export const myProfile = () => client.get('/api/members');

export const myProfileUpdate = ({name, phoneNumber, referenceUrl, part, organization, motto}) =>
    client.patch('/api/members', ({name, phoneNumber, referenceUrl, part, organization, motto}));