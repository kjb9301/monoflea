import axios from 'axios';

// notice
export const getNoticeList = (limit) => axios.get(`/notices?limit=${limit}`);
export const getNoticeDetail = (id) => axios.get(`/notices/${id}`);
// export const postNewNotice = (title, content) => axios.post('/notices', { title, content });

// login
export const login = (email, password) => axios.post('/users/login', { email, password });
export const loginUserCheck = () => axios.get('/users/user-check');
export const logout = () => axios.delete('/users/logout');

// signup
export const signup = (newUser) => axios.post('/users/signup', newUser);
export const checkEmail = (email) => axios.post('/users/check-email', { email });
export const checkNickname = (nickName) => axios.post('/users/check-nickname', { nickName });
export const getAuthNumber = (tel) => axios.post('/certification-number', { tel });

// seller
export const getSellersList = (category,like,limit) => axios.get(`/sellers?category=${category}&like=${like}&limit=${limit}`);
export const getSellerId = (id) => axios.get(`/sellers/${id}`);
export const getSellerCategory = () => axios.get('/sellers/category-list');
export const updateSeller = (id,updateData) => axios.put(`/sellers/${id}` , {updateData});
export const incrementLike = (id) => axios.post(`/sellers/like/${id}`);
export const decrementLike = (id) => axios.delete(`/sellers/dislike/${id}`);
export const getOneSeller = (id) => axios.get(`/sellers/${id}`);
export const incViewCnt = (id) => axios.put(`sellers/view_cnt/${id}`);

// market
export const getMarketList = (confirm,selectDate,limit) => axios.get(`/markets?confirm=${confirm}&selectDate=${selectDate}&limit=${limit}`);
export const createMarket = (info) => axios.post('/markets', info);
export const updateMarket = (id,marketDetail) => axios.put(`/markets/${id}`,marketDetail);
export const deleteMarket = (id) => axios.delete(`/markets/${id}`);
export const getApplyList = (id) =>axios.get(`/markets/recruitment/${id}`);
export const applyMarket = (id) => axios.post('/markets/recruitment',{id});
export const applyCancel = (id) => axios.delete('/markets/recruitment/seller',{params:id});
export const applyClose = (id) => axios.put(`/markets/recruitment/${id}`);
export const applyDelete = (id) => axios.delete('/markets/recruitment/host',{params:id});
export const viewCount = (id) => axios.put('/markets/view-count',{id});

// class
export const getClassList = (category, limit) => axios.get(`/classes?category=${category}&limit=${limit}`);
export const getClassCategory = () => axios.get('/classes/category-list');
export const postNewClass = (newClass) => axios.post('/classes', newClass);
export const getEnrolledList = (class_id) => axios.get(`/classes/enroll/${class_id}`);
export const saveEnrolledUser = (userInfo) => axios.post(`/users/enroll-info`, { userInfo });
export const takeOnedayClass = (id) => axios.post(`/classes/taken`, { id });
export const cancelOnedayClass = (id) => axios.delete(`/classes/taken`, { params: { id } });

// MyPage
export const getMypageData = (url,id) => axios.get(`${url}?id=${id}`);
export const getMarketPlace = (id) => axios.get(`/mypages/market-place?market_id=${id}`);
export const updateProfile = (id, profile) => axios.put(`/mypages/update-profile`, { id, profile });