import client from "./client";

export const searchKeyword = (keyword) => {
    return client.get(`/api/boards`, {
        params: {
            keyword: keyword,
        }
    });
};