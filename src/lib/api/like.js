import client from "./client";

export const registerLike = (boardId) => client.post('/api/likes', ({boardId}));

export const cancelLike = (boardId) => client.delete('/api/likes', {
    data: {boardId}
});