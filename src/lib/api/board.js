import client from "./client";

export const writeBoard = ({title, content, tag, imageUrls}) =>
    client.post('/api/boards', ({title, content, tag, imageUrls}));

export const readBoard = (boardId) => client.get(`/api/boards/${boardId}`);

export const boardList = (condition) => {
    return client.get(`api/boards`, {
        params: {
            sortBy: condition, // condition에는 latest, likes, views가 들어감
        }
    });
};