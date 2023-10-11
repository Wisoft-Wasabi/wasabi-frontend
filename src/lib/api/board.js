import client from "./client";

export const writeBoard = ({title, content, tag, imageUrls}) =>
    client.post('/boards', ({title, content, tag, imageUrls}));

export const readBoard = (boardId) => client.get(`/boards/${boardId}`);

export const boardList = (condition) => {
    return client.get(`/boards`, {
        params: {
            sortBy: condition, // condition에는 latest, likes, views가 들어감
        }
    });
};