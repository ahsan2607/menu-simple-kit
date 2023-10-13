import { IconButton, Box, Link } from '@mui/material';
import { GridViewSharp } from '@mui/icons-material';
import { List } from '@mui/icons-material';
import { ArrowDropUp } from '@mui/icons-material';
import { useState } from 'react';
import { BaseLayout } from '@layouts';
import { useAtomValue } from 'jotai';
import { menuAtom } from '@store';
import { Menu } from '@components';

export const Home = (props: { socket: any }) => {
	// const sendMessage = async () => {
	// if (currentMessage !== '') {
	// const messageData = {
	// room: room,
	// 	author: username,
	// 	message: 'P',
	// 	time: `${new Date(Date.now()).getHours()}:${new Date(
	// 		Date.now()
	// 	).getMinutes()}`,
	// };

	// await props.socket.emit('send_request', messageData);
	// setMessageList((list) => [...list, messageData]);
	// setCurrentMessage("");
	// };

	const menu = useAtomValue(menuAtom);
	const [disp, setDisp] = useState(0);

	if (menu) {
		return (
			<BaseLayout>
				<Box
					sx={{
						position: 'fixed',
						top: 'auto',
						bottom: 90,
						right: 70,
						zIndex: 99,
					}}
				>
					{/* <Box sx={{ display: 'block', paddingTop: '.25rem' }} /> */}
					<Link href="#">
						<IconButton
							sx={{
								backgroundColor: 'white',
								boxShadow: '4px 4px 3px rgba(0, 0, 0, .4)',
							}}
						>
							<ArrowDropUp sx={{ color: 'primary.main' }} />
						</IconButton>
					</Link>
				</Box>

				<IconButton
					onClick={() => {
						if (disp === 0) {
							setDisp(1);
						} else {
							setDisp(0);
						}
					}}
					sx={{
						backgroundColor: 'white',
						boxShadow: '4px 4px 3px rgba(0, 0, 0, .4)',
					}}
				>
					{disp === 1 ? (
						<GridViewSharp sx={{ color: 'primary.main' }} />
					) : (
						<List sx={{ color: 'primary.main' }} />
					)}
				</IconButton>
				{Object.keys(menu).map((value, index) => {
					return (
						<Menu
							disp={disp}
							data={menu[value]}
							title={Object.keys(menu)[index]}
							key={`${menu[index]}-${index}`}
						/>
					);
				})}
				<Box sx={{ height: '36px' }} />
			</BaseLayout>
		);
	} else {
		return <BaseLayout>b</BaseLayout>;
	}
};
