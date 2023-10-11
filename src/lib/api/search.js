import client from "./client";

export const searchKeyword = (keyword) => {
    return client.get(`/boards`, {
        params: {
            keyword: keyword,
        }
    });
};