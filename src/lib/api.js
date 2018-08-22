import axios from 'axios';
import qs from 'query-string';

export const getNoticeList = () => axios.get('/notices');
export const getNoticeDetail = (id) => axios.get(`/notices/${id}`);

// login
export const login = (email, password) => axios.post('/users/login', { email, password });