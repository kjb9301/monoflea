import axios from 'axios';
import qs from 'query-string';

// notice
export const getNoticeList = () => axios.get('/notices');
export const getNoticeDetail = (id) => axios.get(`/notices/${id}`);

// login
export const login = (email, password) => axios.post('/users/login', { email, password });
export const loginUserCheck = () => axios.get('/users/user-check');
export const logout = () => axios.delete('/users/logout');

// signup
export const signup = (email, nickName, password) => axios.post('/users/signup', { email, nickName, password });

// seller
export const getSellersList = () => axios.get('/sellers');
export const getMarketList = (category) => axios.get(`/markets?category=${category}`);
