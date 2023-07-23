import client from "./client";

export const writeBoard = ({title, content, tags, imageUrls}) =>
    client.post('/api/boards', ({title, content, tags, imageUrls}));

export const readBoard = (boardId) => client.get(`/api/boards/${boardId}`);