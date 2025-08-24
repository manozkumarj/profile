import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portfolio-rt-backend.vercel.app/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
