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
export const checkEmail = (email) => axios.post('/users/check-email', { email });
export const checkNickname = (nickName) => axios.post('/users/check-nickname', { nickName });

// seller
export const getSellersList = () => axios.get('/sellers');
export const getMarketList = (category) => axios.get(`/markets?category=${category}`);
export const getClassList = () => axios.get('/classes');