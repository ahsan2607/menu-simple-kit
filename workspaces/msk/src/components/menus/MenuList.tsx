import { ReactNode } from 'react';
import { Grid } from '@mui/material';

interface MenuListProps {
	children: ReactNode;
}

export const MenuList = (props: MenuListProps) => {
	return (
		// <ul
		// sx={{
		// 	paddingLeft: 0,
		// 	display: 'flex',
		// 	flexDirection: 'column',
		// 	gap: '2rem',
		// }}
		// >
		// </ul>
		<Grid container spacing={3} sx={{ padding: '0 20px 0 20px' }}>
			{props.children}
		</Grid>
	);
};
