import client from "./client";

export const registerLike = ({boardId}) =>
    client.post('/likes', {boardId});

export const cancelLike = ({boardId}) =>
    client.delete(`/likes`, {
        params: {
            boardId: boardId
        }
    });

export const getLike = ({boardId}) =>
    client.get(`/likes`, {
        params: {
            boardId: boardId
        }
    });