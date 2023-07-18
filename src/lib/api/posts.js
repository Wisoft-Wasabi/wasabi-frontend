import client from "./client";

export const writePost = ({title, content, tags, imageUrls}) =>
    client.post('/api/boards', ({title, content, tags, imageUrls}));