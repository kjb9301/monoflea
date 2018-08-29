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
export const signup = (email, nickName, password, userType, name, tel, category_id, career, sns, profile_img, biz_YN, seller_desc, class_TF, show_TF) => axios.post('/users/signup', { email, nickName, password, userType, name, tel, category_id, career, sns, profile_img, biz_YN, seller_desc, class_TF, show_TF});
export const checkEmail = (email) => axios.post('/users/check-email', { email });
export const checkNickname = (nickName) => axios.post('/users/check-nickname', { nickName });


// seller
export const getSellersList = (category) => axios.get(`/sellers?category=${category}`);
export const getSellerId = (id) => axios.get(`/sellers/${id}`);
export const getSellerCategory = () => axios.get('/sellers/category-list');

// market
export const getMarketList = (category) => axios.get(`/markets?category=${category}`);
export const getMarketDetail = (id) => axios.get(`/markets/${id}`);

export const getClassList = (category) => axios.get(`/classes?category=${category}`);
export const getClassId = (id) => axios.get(`/classes/${id}`);
