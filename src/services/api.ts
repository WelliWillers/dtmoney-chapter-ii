import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://dtmoney-chapter-30lui4e1i-welliwillers.vercel.app/api' : 'https://localhost:3000/api'
});