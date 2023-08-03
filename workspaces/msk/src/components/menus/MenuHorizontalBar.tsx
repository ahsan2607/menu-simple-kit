import { Box, Typography } from '@mui/material';

interface MenuHorizontalBarProps {
	categories: string;
}

export const MenuHorizontalBar = (props: MenuHorizontalBarProps) => {
	return (
		<Box
			bgcolor="primary.main"
			sx={{
				margin: '40px 0 10px 0',
				padding: '15px 0 15px 0',
				borderRadius: '10px',
			}}
		>
			<Typography
				fontWeight={500}
				fontSize={18}
				sx={{ color: 'white', marginLeft: '2rem' }}
			>
				{props.categories}
			</Typography>
		</Box>
	);
};
