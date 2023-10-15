import { IconButton, Box, Link } from '@mui/material';
import { ArrowDropUp } from '@mui/icons-material';

export const UptoTop = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 'auto',
				right: 70,
				bottom: 90,
				zIndex: 99,
			}}
		>
			<Box sx={{ display: 'block', paddingTop: '.25rem' }} />
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
	);
};
