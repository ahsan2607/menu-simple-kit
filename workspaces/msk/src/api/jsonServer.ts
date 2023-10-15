import axios from 'axios';

export const jsonServer = axios.create({
	baseURL: 'http://localhost:8008/',
});
