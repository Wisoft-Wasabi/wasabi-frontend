import client from "./client";

export const myBoardList = () => client.get('/api/boards/my-board');

export const myLikeList = () => client.get('/api/boards/my-like');