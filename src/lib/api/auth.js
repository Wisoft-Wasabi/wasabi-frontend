import client from "./client";

export const signUp = ({email, password, checkPassword, username, phoneNumber, referenceUrl, part, organization, motto}) =>
    client.post("/api/auth/signUp", ({email, password, checkPassword, username, phoneNumber, referenceUrl, part, organization, motto}));

export const login = ({email, password}) =>
    client.post("/api/auth/login", ({email, password}));