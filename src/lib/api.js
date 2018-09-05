import axios from 'axios';
import qs from 'query-string';

// notice
export const getNoticeList = () => axios.get('/notices');
export const getNoticeDetail = (id) => axios.get(`/notices/${id}`);
export const postNewNotice = (title, content) => axios.post('/notices');

// login
export const login = (email, password) => axios.post('/users/login', { email, password });
export const loginUserCheck = () => axios.get('/users/user-check');
export const logout = () => axios.delete('/users/logout');

// signup
export const signup = (newUser) => axios.post('/users/signup', { newUser });
export const checkEmail = (email) => axios.post('/users/check-email', { email });
export const checkNickname = (nickName) => axios.post('/users/check-nickname', { nickName });
export const getAuthNumber = (tel) => axios.post('/certification-number', { tel });

// seller
export const getSellersList = (category) => axios.get(`/sellers?category=${category}`);
export const getSellerId = (id) => axios.get(`/sellers/${id}`);
export const getSellerCategory = () => axios.get('/sellers/category-list');
export const postSeller = (newSeller) => axios.post('/sellers' , {newSeller});

// market
export const getMarketList = (category) => axios.get(`/markets?category=${category}`);
export const getMarketDetail = (id) => axios.get(`/markets/${id}`);
// export const postMarket = (newMarket) => axios.post('/markets', {newMarket});
export const postMarket = (info) => axios.post('/markets', info);

export const removeMarket = (id) => axios.delete(`/markets/${id}`);

// class
export const getClassList = (category) => axios.get(`/classes?category=${category}`);
export const getClassDetail = (id) => axios.get(`/classes/${id}`);
