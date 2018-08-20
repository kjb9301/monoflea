import axios from 'axios';
import qs from 'query-string';

export const getNoticeList = () => axios.get('/notices');
export const getNoticeDetail = (id) => axios.get(`/notices/${id}`);