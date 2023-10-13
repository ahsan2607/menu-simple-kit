import * as io from 'socket.io-client';
import { Home, StaffPage } from '@pages';

const socket = io.connect('http://localhost:8001');

export const navContent = [
	{
		name: 'Home',
		link: '/',
		el: <Home socket={socket} />,
	},
	{
		name: 'Staff',
		link: '/staff',
		el: <StaffPage socket={socket} />,
	},
];
