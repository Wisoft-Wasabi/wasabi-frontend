import client from "./client";

export const myBoardList = () => client.get('/boards/my-board');

export const myLikeList = () => client.get('/boards/my-like');

export const myProfile = () => client.get('/members');

export const myProfileUpdate = ({name, phoneNumber, referenceUrl, part, organization, motto}) =>
    client.patch('/api/members', ({name, phoneNumber, referenceUrl, part, organization, motto}));