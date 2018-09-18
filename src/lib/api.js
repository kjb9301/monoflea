import axios from 'axios';

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
export const updateSeller = (id,updateData) => axios.put(`/sellers/${id}` , {updateData});

// market
export const getMarketList = (category) => axios.get(`/markets?category=${category}`);
export const createMarket = (info) => axios.post('/markets', info);
export const updateMarket = (id,marketDetail) => axios.put(`/markets/${id}`,marketDetail);
export const deleteMarket = (id) => axios.delete(`/markets/${id}`);
export const getApplyList = (id) =>axios.get(`/markets/recruitment/${id}`);
export const applyMarket = (id) => axios.post('/markets/recruitment',id);
export const applyCancel = (info) => axios.delete('/markets/recruitment',info);

// class
export const getClassList = (category) => axios.get(`/classes?category=${category}`);
export const getClassDetail = (id) => axios.get(`/classes/${id}`);
export const getClassCategory = () => axios.get('/classes/category-list');
export const postNewClass = (newClass) => axios.post('/classes', newClass)
                                                // .then(results => console.log(results))
                                                // .catch(e => console.log(e.response));
