import axios from "axios";

export const api = axios.create({
    baseURL: 'https://my-json-server-git-main-giandutra.vercel.app'
})