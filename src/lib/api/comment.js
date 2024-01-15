import client from "./client";

export const writeComment = ({boardId, content}) =>
  client.post('/comments', ({boardId, content}));