import client from "./client";

export const signUp = ({email, password, checkPassword, name, phoneNumber, referenceUrl, part, organization, motto}) =>
    client.post("/auth/signup", ({email, password, checkPassword, name, phoneNumber, referenceUrl, part, organization, motto}));

export const login = ({email, password}) =>
    client.post("/auth/login", ({email, password}));